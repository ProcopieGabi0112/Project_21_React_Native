import React from 'react'
import {  Text,
          StyleSheet,
          SafeAreaView } from 'react-native'
import SignInScreen from './SignInScreen/SignInScreen'
import SignUpScreen from './SignUpScreen'
import ConfirmEmailScreen from './ConfirmEmailScreen'
import ForgotPasswordScreen from './ForgotPasswordScreen'
import NewPasswordScreen from './NewPasswordScreen'

const Login = ({navigation}) => {
    const backgroundStyle = {
        color:'black',
        backgroundColor:'white'
    }
    return (
        <SafeAreaView style={styles.root}>
             <SignInScreen/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   root: {
       flex:1
   }

});

export default Login
