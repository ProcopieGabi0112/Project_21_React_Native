import React from 'react'
import {View,Text,TextInput,StyleSheet} from 'react-native'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
    return (
        <View style={styles.container}>
           <TextInput 
           value={value}
           onChangeText={setValue}
           placeholder={placeholder}
           style={styles.input}
           secureTextEntry={secureTextEntry}
           ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'85%',
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
        marginLeft:20,
        marginTop:20,
        height:30,
        marginRight:50,
        
     },
    input:{
        fontSize:20,
    },

});
export default CustomInput;