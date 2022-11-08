import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Button, Text, Image, FlatList, Alert, StyleSheet,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-ico-material-design';

const Details = ({route,navigation}) => {
    const { LikeCounter, UserCounter, SubscribeCounter } = route.params
    return (
        <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white',marginTop:140,marginBottom:30 }}>
            <Button onPress={() => navigation.navigate('Listing')} title='Remarks'></Button>
            <Text></Text>
            <Button onPress={() => navigation.navigate('Login')} title='   Login   '></Button>
            <Text style={{color:'black',marginTop:550}}>_________________________________________________</Text>
            <Text style={{ color: 'black', fontSize: 15, marginTop: 15 }}>         {LikeCounter} Likes     {UserCounter+1} Users              {SubscribeCounter} Subscribers</Text>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Details
