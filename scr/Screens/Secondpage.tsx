import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Secondpage = () => {
    const navigation=useNavigation<any>();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View >
                <TouchableOpacity>
                    <View style={{ alignItems: "center", marginTop: 250 }} >
                        <Image source={require('./../images/chair.png')} />
                    </View>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.button1}
                     onPress ={() => {
                        navigation.navigate('LogIn');}}>
                        <Text style={styles.buttonText1}>Log In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}
                     onPress ={() => {
                        navigation.navigate('Signup');}}>
                        <Text style={styles.buttonText2}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{color:'black',textAlign:'center',opacity:0.3}}>---------------------------------OR--------------------------------</Text>
            <View>
                <TouchableOpacity style={styles.button3}>
                    <Image style={{}} source={require('./../images/Google.png')}/>
                <Text style={styles.buttonText3}>  Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                    <Image style={{}} source={require('./../images/Fb.png')}/>
                <Text style={styles.buttonText3}>  Continue with Facebook</Text>
                </TouchableOpacity>

                <View>
                <Text style={{color:'black',textAlign:'center',marginLeft:-30}}>
                Dont’t have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup' as never)}>
                <Text style={{color:'blue',marginLeft:255,marginTop:-22}}>Register</Text>
                </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

export default Secondpage

const styles = StyleSheet.create({
    button1: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginRight:20,
        marginLeft:20,
        flexBasis:'auto',
        width: '90%',
    
      },
      buttonText1: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      button2: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginRight:20,
        marginLeft:20,
        flexBasis:'auto',
        width: '90%',
    
      },
      buttonText2: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
      },
      button3: {
        flexDirection:'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginRight:20,
        marginLeft:20,
        flexBasis:'auto',
        width: '90%',
    
      },
      buttonText3: {
        color: 'black',
        fontSize: 13,
        fontWeight:'bold',
        
      },
      button4: {
        flexDirection:'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginRight:20,
        marginLeft:20,
        flexBasis:'auto',
        width: '90%',
    },
    
})