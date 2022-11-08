import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import MapView from 'react-native-maps';

export default function Map({route}){

    const {city,lat,lng} = route.params;

    return(

        <View style={styles.body}>
              <Text style={styles.text}> {city}</Text>

              <MapView style={styles.map}
                       initialRegion={{
                           latitude: parseFloat(lat) ,
                           longitude: parseFloat(lng) ,
                           latitudeDelta:0.005,
                           longitudeDelta: 0.005,
                       }}
              />

        </View> 
         );
}

const styles = StyleSheet.create({
   map:{
       width:'100%',
       height:'100%',
   },
    body:{
       flex:1,
       alignItems:'center',
   },
   text:{
       fontSize:30,
       margin:10,
   }

})