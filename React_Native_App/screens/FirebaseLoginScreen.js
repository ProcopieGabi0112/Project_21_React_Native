import { KeyboardAvoidingView, StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {auth} from '../firebase'
import {useNavigation } from '@react-navigation/native'
import {Image} from 'react-native'
import Logo from './logo.png';
import { useSelector,useDispatch } from 'react-redux'

const FirebaseLoginScreen = () => {

  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  useEffect(()=>{
      const unsubscribe =  auth.onAuthStateChanged(user => {
        if(user){
          navigation.navigate("FirebaseHome");
        //  navigation.navigate("MainScreen");
        }
      })

      return unsubscribe
  },[])

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email,password)
    .then(userCredentials => {
       const user = userCredentials.user;
        console.log("Registered in with:",user.email);
       console.warn("User Created");
      })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
     auth
       .signInWithEmailAndPassword(email,password)
       .then(userCredentials => {
             const user = userCredentials.user;
             console.log("Logged in with:",user.email);
             console.warn("Login Successfully");
       })
       .catch(error =>alert(error.message))
  }

  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <KeyboardAvoidingView 
       style={styles.container}
       behavior="padding">

        <View style={styles.inputContainer}>
           
           <Image source={Logo} styles={styles.logo} resizeMode="contain" />
           
            <TextInput
              placeholder="Enter email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input} />
            
            <TextInput
                placeholder="Enter password"
                value={password}
                onChangeText={text =>setPassword(text) }
                style={styles.input} 
                secureTextEntry    
                />
          
        </View>

        <View styles={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button} >
                   <Text style={styles.buttonText}>Login</Text>

                </TouchableOpacity>
              <TouchableOpacity
                  onPress={handleSignUp}
                  style={[styles.button,styles.buttonOutline]} >
                  <Text style={styles.buttonOutlineText}>Register</Text>

              </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default FirebaseLoginScreen

const styles = StyleSheet.create({
      logo:{
       width: '60%',
       padding: 30,
       backgroundColor: '#F9FBFC',
      },
      container:{
        marginTop:70,
        backgroundColor:'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
     },
     inputContainer:{
         width:'80%'
     },
     input:{
           backgroundColor:'white',
           paddingHorizontal:15,
           paddingVertical:10,
           marginHorizontal:20,
           borderRadius:10,
           marginTop:5,
     },
     buttonContainer:{
          width:'100%',
          justifyContent:'center',
          alignItems:'center',
          marginTop:40,
          
     },
     button:{
            backgroundColor:'#0782F9',
            width:200,
            padding:15,
            borderRadius:10,
            alignItems:'center',
            marginTop:30,
     },
     buttonOutline:{
          backgroundColor:'white',
          marginTop:5,
          borderColor:'#0782F9',
          borderWidth:2,
     },
     buttonText:{
              color:'white',
              fontWeight:'700',
              fontSize:16,
     },
     buttonOutlineText:{
       color: '#0782F9',
       fontWeight: '700',
       fontSize: 16,
     },

})