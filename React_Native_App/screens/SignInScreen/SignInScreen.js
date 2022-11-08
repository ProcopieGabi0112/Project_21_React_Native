import React, { useContext, useState, useEffect } from 'react'
import { View, TextInput, Text, Image, StyleSheet, useWindowDimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import Logo from './assets/logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase'
import { useSelector, useDispatch } from 'react-redux'

const SignInScreen = () => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  const onForgotPasswordPressed = () => { navigation.navigate('ForgotPassword');  };
  const onSignUpPress = () => {  navigation.navigate('SignUp');  };
  const onSignInPressed = () => {      
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
        console.warn("Login Successfully");
      })
      .catch(error => alert(error.message))

  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("FirebaseHome");
        
      }
    })
    return unsubscribe
  }, [])
  
    return (
        <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}> 
        <KeyboardAvoidingView>
        <View styles={styles.root}>
           <Image source={Logo} styles={styles.logo} resizeMode="contain"/>
                <CustomInput placeholder="Enter your email" value={email} setValue={setEmail} onChangeText={ text => setEmail(text)}/>
                <CustomInput placeholder="Enter your password" value={password} setValue={setPassword} secureTextEntry={true} onChangeText={text => setPassword(text)}/>
                <CustomButton text="Sign In" onPress={onSignInPressed} />
                <CustomButton text="Forgot password?" onPress={onForgotPasswordPressed} type="TERTIARY" />
           <SocialSignInButtons/>
           <CustomButton text="Don't have an account? Create one " onPress={onSignUpPress} type="TERTIARY" />
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );

};

/*STYLES FROM SIGN IN SCREEN */
const styles = StyleSheet.create({
   root:{
     justifyContent:'center',  
     alignItems:'center',
     padding: 30,
     backgroundColor:'#F9FBFC',

   },
    logo:{
       width:'70%',
       maxWidth: 300,
       maxHeight:200,
       },
});

export default SignInScreen;