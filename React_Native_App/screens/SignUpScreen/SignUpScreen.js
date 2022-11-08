import React, { useContext, useState, useEffect } from 'react'
import { View, Image, Text, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase'
import { useSelector, useDispatch } from 'react-redux'

const SignUpScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation()


    const onRegisterPressed = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Registered in with:", user.email);
                console.warn("User Created");
            })
            .catch(error => alert(error.message))

    };
    const onSignInPress = () => { navigation.navigate('SignIn'); };
    const onTermsOfUsePressed = () => { console.warn('onTermsOfUsePressed'); };
    const onPrivacyPressed = () => { console.warn('onPrivacyPressed'); };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("FirebaseHome");
                
            }
        })

        return unsubscribe
    }, [])

    /* VIEW FROM SIGN UP SCREEN*/
    return (
        <ScrollView style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}> 
        <KeyboardAvoidingView style={{marginTop:60}}>
        <View styles={styles.root}>
           <Text style={styles.title}>Create an account</Text>
                <CustomInput placeholder="Enter email" value={email} setValue={setEmail} onChangeText={text => setEmail(text)}/>
                <CustomInput placeholder="Enter password" value={password} setValue={setPassword} secureTextEntry={true} onChangeText={text => setPassword(text)}/>
           <CustomButton text="Register" onPress={onRegisterPressed} />
           <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Term of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
           <SocialSignInButtons/>
           <CustomButton text="Have an account? Sign in " onPress={onSignInPress} type="TERTIARY" />
        
        </View>
        </KeyboardAvoidingView>
        </ScrollView>
    );
    
};

const styles = StyleSheet.create({
   root:{
     justifyContent:'center',  
     alignItems:'center',
     padding: 30,
     backgroundColor:'#F9FBFC',
   },
   title:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight:'bold',
    color:'#051C60',
    margin:10,
    marginTop:'10%',
    marginLeft:'15%'
   },
   text:{
       marginLeft: 25,
       marginRight: 25,
       marginTop: 5,
       color:'gray',
   },
   link:{
       color: '#FDB075',

   }
});
 
export default SignUpScreen;