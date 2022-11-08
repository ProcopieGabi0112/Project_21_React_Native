import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => { navigation.navigate('NewPassword'); };
    const onSignInPress = () => { navigation.navigate('SignIn'); };
   
    return (
        <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View styles={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput placeholder="Enter your email" value={email} setValue={setEmail} />
               
                <CustomButton text="Send" onPress={onSendPressed} />

                <CustomButton text="Back to Sign in " onPress={onSignInPress} type="TERTIARY" />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#F9FBFC',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        marginTop: '10%',
        marginLeft: '15%'
    },
    text: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 5,
        color: 'gray',
    },
    link: {
        color: '#FDB075',

    }
});

export default ForgotPasswordScreen;