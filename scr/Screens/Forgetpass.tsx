import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Forgetpass = () => {
    const navigation=useNavigation<any>();
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <TouchableOpacity style={{ justifyContent: 'space-between', }}>
                <View style={{ flexDirection: 'row', marginTop: 11 }}>
                    <TouchableOpacity 
                      onPress ={() => {
                        navigation.navigate('LogIn');}}>
                    <Image style={{ marginHorizontal: 20, }} source={require('./../images/leftarr.png')} />
                    </TouchableOpacity>
                    <Text style={styles.buttonTextlog}>Forget Password</Text>
                </View>
            </TouchableOpacity>
            <View style={{marginVertical:60}}>
                <Text style={styles.text3}>
                Enter the email associated with your account and 
                we’ll send an email with code to reset your password
                </Text>
            </View>
            
            <View style={styles.mainnametop}>
                    <Text style={styles.title2}> Email </Text>
                    <TextInput
                        style={styles.inputs}
                        // value={Email}
                        // onChangeText={setEmail}
                        placeholder='Text your Email'
                        placeholderTextColor={'grey'}
                        keyboardType='default'

                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button1}
                 onPress ={() => {
                    navigation.navigate('Ottp');}}>
                        <Text style={styles.buttonText1}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            
        </View>
    )
}

export default Forgetpass

const styles = StyleSheet.create({
    buttonTextlog: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    text3:{
        color:'black',
        alignContent:'center',
        marginLeft:20,
        marginRight:20,
        fontSize:11.5,
        textAlign:'center',
        opacity:0.5
      },
      mainnametop: {
        marginLeft: 10,
        marginVertical: 10,
        marginTop: 40
    },
    title2: {
        color: 'black',
        fontSize: 17,
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#fafafa',
        color: 'black',
        marginRight: 10,
        marginTop: 5,
    },
    button1: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginRight: 10,
        marginLeft: 10,
        flexBasis: 'auto',
        width: '94%',

    },
    buttonText1: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})