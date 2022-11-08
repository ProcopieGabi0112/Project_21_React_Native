import React,{useState} from 'react'
import {View,Button,Text,Image,ScrollView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { LogBox } from 'react-native';

const Home = ({navigation}) => {
     const [UserCounter,setUserCounter] = useState(0) 
     const [LikeCounter,setLikeCounter] = useState(0) 
     const [SubscribeCounter, setSubscribeCounter] = useState(0) 
     
     return (
         <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
         <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black',height:805}}>
            <Image style={{width: '90%', height:'35%', marginLeft: 30, marginRight: 30 }} source={require('./assets-images/fig_1.jpg')}></Image>
            <Image style={{ width:'100%', height:70, marginLeft: 30, marginRight: 30,margin:20 }} source={require('./assets-images/fig_3.png')}></Image>   
            <Image style={{ width: '90%', height: '35%', marginLeft: 30, marginRight: 30,marginBottom:30 }} source={require('./assets-images/fig_2.jpg')}></Image>
             <Text>
                 <Text>____</Text>
                 <Button onPress={() => setLikeCounter(LikeCounter + 1)} title='  Like  '> </Button>
                 <Text>___</Text>
                 <Button onPress={() => { navigation.navigate('Details', {LikeCounter,UserCounter,SubscribeCounter}), setUserCounter(UserCounter + 1) }} title='Welcome'> </Button>
                 <Text>____</Text>
                 <Button onPress={() => setSubscribeCounter(SubscribeCounter + 1) } title='Subscribe'> </Button>
             </Text>
             <Text style={{ color: 'white', fontSize: 15, marginTop: 15 }}>         {LikeCounter} Likes     {UserCounter} Users              {SubscribeCounter} Subscribers</Text>
        </View>
        </ScrollView>
    ) 
}

export default Home;