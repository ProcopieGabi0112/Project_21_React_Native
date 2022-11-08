import { StatusBar, } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { Surface, Title, TextInput } from 'react-native-paper';
import ModalView from '../components/ModalView';
import PostCardItem from '../components/PostCardItem';


const url = 'https://2391-188-26-252-180.ngrok.io/dishes'

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export default function App() {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [dishId, setDishId] = useState(0);
    const [loading, setLoading] = useState(false);

    const getDishes = async () => {
        setLoading(true)
        await fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch(e => console.log(e))
        setLoading(false)
    }

    const addDish = (description, name) => {
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({
                "name": name,
                "description": description,
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('post:', resJson)
                updateDish()
            }).catch(e => { console.log(e) })
    }

    const editDish = (dishId, description, name) => {
        fetch(url + `/${dishId}`, {
            method: "PUT",
            headers,
            body: JSON.stringify({
                "name": name,
                "description": description,
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('updated:', resJson)
                updateDish()
            }).catch(e => { console.log(e) })
    }

    const deleteDish = (dishId) => {
        fetch(url + `/${dishId}`, {
            method: "DELETE",
            headers,
        }).then((res) => res.json())
            .then(resJson => {
                console.log('delete:', resJson)
                getDishes()
            }).catch(e => { console.log(e) })
    }

    const updateDish = () => {
        getDishes()
        setVisible(false);
        setName('')
        setDescription('')
        setDishId(0)
    }

    const edit = (id, description, name) => {
        setVisible(true)
        setDishId(id)
        setDescription(description)
        setName(name)
    }

    useEffect(() => {
        getDishes();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Surface style={styles.header}>
                <Title>Dutch Delight Menu</Title>
                {/*
                <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                    <Text style={styles.buttonText}>Add Dish</Text>
                </TouchableOpacity>
                */}
            </Surface>
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.id + index.toString()}
                refreshing={loading}
                onRefresh={getDishes}
                renderItem={({ item }) => (
                    <PostCardItem
                        title={item.name}
                        author={item.description}
                       // onEdit={() => edit(item.id, item.description, item.name)}
                       // onDelete={() => deleteDish(item.id)}
                    />
                )}
            />
            {/*
            <ModalView
                visible={visible}
                title="Add Dish"
                onDismiss={() => setVisible(false)}
                onSubmit={() => {
                    if (dishId && description && name) {
                        editDish(dishId, description, name)
                    } else {
                        addDish(description, name)
                    }
                }}
                cancelable>
                <TextInput
                    label="Nume"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    mode="outlined"
                />
                <TextInput
                    label="Descriere"
                    value={description}
                    onChangeText={(text) => setDescription(text)}
                    mode="outlined"
                />
                
            </ModalView>
            */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        backgroundColor:'#943ddb',
    },
    header: {
        marginTop: Platform.OS === 'android' ? 35 : 0,
        padding: 16,
        elevation: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor:'white',
         
        
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
