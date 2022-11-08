import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword,setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => { navigation.navigate('SignIn'); };
    const onSignInPress = () => { navigation.navigate('SignIn'); };
   
    return (
        <ScrollView style={{ backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
            <View styles={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput placeholder="Code" value={code} setValue={setCode} />

                <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword} />

                <CustomButton text="Submit" onPress={onSubmitPressed} />

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
        marginTop: '50%',
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

export default NewPasswordScreen;