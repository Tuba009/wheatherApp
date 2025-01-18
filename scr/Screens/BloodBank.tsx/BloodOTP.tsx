import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import BloodLogin from './BloodLogin'

const BloodOTP = () => {
    const [number, setNumber] = useState<string>('')
    const navigation=useNavigation<any>();

    // Determine if the button should be enabled
    const isButtonEnabled = number.trim() !== ''

    return (
        <View style={{ flex: 1, backgroundColor: '#ffff' }}>
            <Image source={require('./../../images/shapes.png')} />
            <View style={{ marginLeft: 50, marginTop: 20 }}>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: "500" }}>Enter Your Mobile Number</Text>
                <TextInput
                    style={{
                        borderWidth: 0.5,
                        width: "90%",
                        marginTop: 10,
                        borderRadius: 20,
                        color: "black",
                        marginLeft: -10,
                        paddingHorizontal: 10,
                    }}
                    value={number}
                    onChangeText={setNumber}
                    placeholder=" +92 your mobile number"
                    placeholderTextColor="grey"
                    keyboardType="number-pad"
                />
            </View>
            <View style={{ marginTop: 250 }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('BloodLogin')}}
                    disabled={!isButtonEnabled} // Disable the button when `isButtonEnabled` is false
                    style={[
                        styles.button,
                        { backgroundColor: isButtonEnabled ? "#820000" : "#d3d3d3" }, // Change color based on the condition
                    ]}
                >
                    <Text style={styles.buttonText}>Get OTP</Text>
                    <Image
                        style={styles.buttonImage}
                        source={require('./../../images/cccc.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BloodOTP

const styles = StyleSheet.create({
    button: {
        width: '70%',
        height: "45%",
        marginLeft: 50,
        borderRadius: 20,
        marginTop: -90,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    buttonText: {
        color: "white",
        fontWeight: '800',
        fontSize: 16,
       textAlign:'center',
       justifyContent:'space-between',
       paddingHorizontal:75
       
    },
    buttonImage: {
        width: "30%",
        height: "104%",
        borderRadius:23,
        marginLeft:-40
        
        
        
        
    },
})
