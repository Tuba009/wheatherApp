import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Slider1 = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        // Navigate to Slider2 after 20 seconds
        const timer = setTimeout(() => {
            navigation.navigate('Slider2');
        }, 1000); // 20 seconds = 20000 milliseconds

        // Cleanup the timer if the component unmounts
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={{ flex: 1, backgroundColor: '#820000' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('Slider2') }}>
                <Image 
                    style={{ marginLeft: 60, marginTop: 130 }}
                    source={require('./../../images/heartbeat.png')} 
                />
            </TouchableOpacity>

            <View>
                <Text style={{ color: 'white', marginLeft: 83, fontWeight: "bold", fontSize: 20 }}>
                    To be a responsible
                </Text>
                <Text style={{ color: 'white', marginLeft: 65, fontWeight: "bold", fontSize: 20 }}>
                    donor, you must get a
                </Text>
                <Text style={{ color: 'white', marginLeft: 130, fontWeight: "bold", fontSize: 20 }}>
                    check-up.
                </Text>
            </View>
        </View>
    )
}

export default Slider1

const styles = StyleSheet.create({})
