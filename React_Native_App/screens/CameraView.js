import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import React,{ useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';

const CameraView = () => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const handleCamera = () => {
        console.warn('Capture');
    }
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:-90,
        width:600,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 30,
        
    },
    button: {
        flex: 0.2,
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginLeft: 90,
        
    },
    text: {
        fontSize: 20,
        color: 'white',

    },
});

export default CameraView

