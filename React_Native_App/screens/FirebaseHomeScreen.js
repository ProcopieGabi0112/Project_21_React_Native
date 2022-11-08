import { StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {auth} from '../firebase'
import { getDishes } from '../components/redux/actions'
import { getCities } from '../components/redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import CustomButton from '../components/CustomButton'


const FirebaseHomeScreen = () => {

  const navigation = useNavigation()
  const {name,age,dishes,cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const handleSignOut = () => {
     auth
        .signOut()
        .then(()=>{
          navigation.navigate("SignIn")
        })
          .catch(error => alert(error.message))
  }

  const handleComment = () => {
    navigation.navigate('Comment');
  }
  const handleMenu = () => {
    navigation.navigate('Menu');
  }
  const handleOrder = () => {
    navigation.navigate('Order');
  }
  const testCamera = () => {
      navigation.navigate('CameraView');
  }

  useEffect( () => {
    dispatch(getDishes());
    dispatch(getCities());
  },[] );


  return (
    <ScrollView>
    <View style={styles.container}>
   
      <Text style={styles.main_title}>Hi, {auth.currentUser?.email.split('@')[0]} </Text>
        
        <Text style={styles.new}>Your opinion matters</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleComment}>
          <Text style={styles.buttonText}>comment here...</Text>
        </TouchableOpacity>

        <Text style={styles.news}>Menu of the day</Text>
        <FlatList
           data={dishes}
           renderItem={({item}) => (
                   <View style={styles.it}>
                     <Text style={styles.title}>{item.kind}</Text>
                     <Text style={styles.subtitle}>{item.dish}</Text>
                   </View>
           )}
           keyExtractor={(item,index)=>index.toString()}
        />
       
        <TouchableOpacity
          style={styles.button}
          onPress={handleMenu}>
          <Text style={styles.buttonText}> Check the menu</Text>
        </TouchableOpacity>
   
        <Text style={styles.new}>Are you hungry?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleOrder}>
          <Text style={styles.buttonText}>order now...</Text>
        </TouchableOpacity>


        <Text style={styles.news}>Locations</Text>
        <FlatList
          data={cities}
          renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Map',{
                    city:item.city,
                    lat:item.lat,
                    lng:item.lng,
                    });
                }} >
            <View style={styles.itm}>
              <Text style={styles.title}>{item.city}</Text>
              <Text style={styles.subtitle}>{item.street}</Text>
            </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={testCamera}>
          <Text style={styles.buttonText}> Test the camera</Text>
        </TouchableOpacity>

       <TouchableOpacity
          style={styles.button} 
          onPress={handleSignOut}>
            <Text style={styles.buttonText}> Sign out</Text>
       </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default FirebaseHomeScreen

const styles = StyleSheet.create({
  main_title:{ 
    fontSize: 40,
    marginTop: 330,
    marginBottom: 400,
    marginRight: 180,
        color: 'black',
  }
  , 
  it:{
    backgroundColor: '#FDB075',
    borderWidth:2,
    borderColor:'black',
    borderRadius:30,
    margin:5,
    width:250,
    justifyContent:'center',
    alignItems:'center',
  },
  itm: {
    backgroundColor: '#03fc62',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 30,
    margin: 5,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
       fontSize:30,
       margin:10,
  },
  subtitle:{
     fontSize:20,
     margin:10,
     color:'#999999',
  },
  item: {
    marginRight: 255,
  },
  news:{
    fontSize: 40,
    marginTop:220,
    color:'black',
    marginBottom:10,
  },   
  new:{
    fontSize: 30,
    marginTop: 220,
    color: 'black',
    marginBottom: 10,
  },
  container: {
          flex:1,
          justifyContent:'center',
          alignItems:'center'
     },
  button: {
    backgroundColor: '#0782F9',
    width: 200,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
    marginBottom:25,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }


})