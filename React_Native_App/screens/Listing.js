import React, { useState } from 'react'
import { View, Button, Text, Image, FlatList, Alert, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Listing = () => {
    const [counter,setCounter] = useState(0)
    const dataArray =  ["Rest API Integration DONE",
                        "Data Persistance DONE",
                        "Navigation System DONE",
                        "Social Login - Facebook, Google, Apple",
                        "Animations - reanimated.js sau Animated API",
                        "Typescript", 
                        "Context API",
                        "Error Handling", 
                        "Firebase notifications +deep linking", 
                        "Share",
                        "Video/Audio streaming and playback",
                        "Global state management - redux or mobX"]
    const onRowSelected = (index, item) => { Alert.alert(`${index+1}.  ${item}`) }
    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex:1 }}>
                <FlatList
                    data={dataArray}
                    renderItem={({ item , index }) => (
                        <TouchableOpacity onPress={() => onRowSelected(index,item)}>
                              <View style={{flex:1,width:'90%',marginLeft:'5%',backgroundColor:'green',marginTop:10,height:50,justifyContent:'center',alignItems:'center'}}>
                                   <Text style={{fontSize:20,color:'white'}}> Implementation {index+1}</Text>
                              </View>
                         </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Listing