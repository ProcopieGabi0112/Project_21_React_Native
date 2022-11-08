import { StatusBar, } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { Surface, Title, TextInput } from 'react-native-paper';
import ModalView from '../components/ModalView';
import PostCardItem from '../components/PostCardItem';


const url = 'https://2391-188-26-252-180.ngrok.io/comments'

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export default function App() {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [client, setClient] = useState('');
    const [clientId, setClientId] = useState(0);
    const [loading, setLoading] = useState(false);

    const getComments = async () => {
        setLoading(true)
        await fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch(e => console.log(e))
        setLoading(false)
    }

    const addComment = (comment, client) => {
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({
                "client": client,
                "comment": comment,
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('post:', resJson)
                updateComment()
            }).catch(e => { console.log(e) })
    }

    const editComment = (clientId, comment, client) => {
        fetch(url + `/${clientId}`, {
            method: "PUT",
            headers,
            body: JSON.stringify({
                "client": client,
                "comment": comment,
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('updated:', resJson)
                updateComment()
            }).catch(e => { console.log(e) })
    }

    const deleteComment = (clientId) => {
        fetch(url + `/${clientId}`, {
            method: "DELETE",
            headers,
        }).then((res) => res.json())
            .then(resJson => {
                console.log('delete:', resJson)
                getComments()
            }).catch(e => { console.log(e) })
    }

    const updateComment = () => {
        getComments()
        setVisible(false);
        setClient('')
        setComment('')
        setClientId(0)
    }

    const edit = (id, comment, client) => {
        setVisible(true)
        setClientId(id)
        setComment(comment)
        setClient(client)
    }

    useEffect(() => {
        getComments();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Surface style={styles.header}>
                <Title>Dutch Delight Comments</Title>
                <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                    <Text style={styles.buttonText}>Add Comment</Text>
                </TouchableOpacity>
            </Surface>
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.id + index.toString()}
                refreshing={loading}
                onRefresh={getComments}
                renderItem={({ item }) => (
                    <PostCardItem
                        title={item.client}
                        author={item.comment}
                        onEdit={() => edit(item.id, item.comment, item.client)}
                        onDelete={() => deleteComment(item.id)}
                    />
                )}
            />
            <ModalView
                visible={visible}
                title="Add Comment"
                onDismiss={() => setVisible(false)}
                onSubmit={() => {
                    if (clientId && comment && client) {
                        editComment(clientId, comment, client)
                    } else {
                        addComment(comment, client)
                    }
                }}
                cancelable>
                <TextInput
                    label="Nume client"
                    value={client}
                    onChangeText={(text) => setClient(text)}
                    mode="outlined"
                />
                <TextInput
                    label="Comentariu"
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    mode="outlined"
                />

            </ModalView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        backgroundColor: '#08fc6e',
    },
    header: {
        marginTop: Platform.OS === 'android' ? 35 : 0,
        padding: 16,
        elevation: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',


    },
    button: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white'
    },
});
