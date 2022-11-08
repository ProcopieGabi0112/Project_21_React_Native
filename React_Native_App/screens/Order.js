import { StatusBar, } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, SafeAreaView, Platform } from 'react-native';
import { Surface, Title, TextInput } from 'react-native-paper';
import ModalView from '../components/ModalView';
import PostCardItem from '../components/PostCardItem';


const url = 'https://2391-188-26-252-180.ngrok.io/orders'

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export default function App() {
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(false);
    const [order, setOrder] = useState('');
    const [table, setTable] = useState('');
    const [tableId, setTableId] = useState(0);
    const [loading, setLoading] = useState(false);

    const getOrders = async () => {
        setLoading(true)
        await fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch(e => console.log(e))
        setLoading(false)
    }

    const addOrder = (order, table) => {
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify({
                "table": table,
                "order": order,
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('post:', resJson)
                updateOrder()
            }).catch(e => { console.log(e) })
    }

    const editOrder = (tableId, order, table) => {
        fetch(url + `/${tableId}`, {
            method: "PUT",
            headers,
            body: JSON.stringify({
                "table": table,
                "order": order,
            })
        }).then((res) => res.json())
            .then(resJson => {
                console.log('updated:', resJson)
                updateOrder()
            }).catch(e => { console.log(e) })
    }

    const deleteOrder = (tableId) => {
        fetch(url + `/${tableId}`, {
            method: "DELETE",
            headers,
        }).then((res) => res.json())
            .then(resJson => {
                console.log('delete:', resJson)
                getOrders()
            }).catch(e => { console.log(e) })
    }

    const updateOrder = () => {
        getOrders()
        setVisible(false);
        setTable('')
        setOrder('')
        setTableId(0)
    }

    const edit = (id, order, table) => {
        setVisible(true)
        setTableId(id)
        setOrder(order)
        setTable(table)
    }

    useEffect(() => {
        getOrders();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Surface style={styles.header}>
                <Title>Dutch Delight orders</Title>
                <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
                    <Text style={styles.buttonText}>Add order</Text>
                </TouchableOpacity>
            </Surface>
            {/*
            <FlatList
                data={data}
                keyExtractor={(item, index) => item.id + index.toString()}
                refreshing={loading}
                onRefresh={getOrders}
                renderItem={({ item }) => (
                    <PostCardItem
                        title={item.table}
                        author={item.order}
                        onEdit={() => edit(item.id, item.order, item.table)}
                        onDelete={() => deleteOrder(item.id)}
                    />
                )}
            />
            */}
            <ModalView
                visible={visible}
                title="Add Order"
                onDismiss={() => setVisible(false)}
                onSubmit={() => {
                    if (tableId && order && table) {
                        editOrder(tableId, order, table)
                    } else {
                        addOrder(order, table)
                    }
                }}
                cancelable>
                <TextInput
                    label="Numarul mesei"
                    value={table}
                    onChangeText={(text) => setTable(text)}
                    mode="outlined"
                />
                <TextInput
                    label="Comanda dumneavoastra"
                    value={order}
                    onChangeText={(text) => setOrder(text)}
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
        backgroundColor: '#fc8905',
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
