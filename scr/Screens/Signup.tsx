import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
// const [Email, setEmail] = useState('')
// const [Password, setPassword] = useState('')
// const [Password, setPassword] = useState('')
// const [info, setInfo] = useState([])

const Signup = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Validation Error', 'Please fill all input fields.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Validation Error', 'Passwords do not match.');
            return;
        }

            // Navigate to the next screen if all validations pass
            navigation.navigate('Livingroom');
        };

        // const navigation = useNavigation<any>();
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <TouchableOpacity style={{ justifyContent: 'space-between', }}
                    onPress={() => {
                        navigation.navigate('Secondpage');
                    }} >
                    <View style={{ flexDirection: 'row', marginTop: 11 }}>
                        <Image style={{ marginHorizontal: 20, }} source={require('./../images/leftarr.png')} />
                        <Text style={styles.buttonTextlog}>          Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 390 }}>
                    <View style={styles.mainnametop}>
                        <Text style={styles.title2}> Email </Text>
                        <TextInput
                            style={styles.inputs}
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Text your Email'
                            placeholderTextColor={'grey'}

                        />
                    </View>

                    <View style={styles.main}>
                        <Text style={styles.title2}> Password</Text>
                        <TextInput
                            style={styles.inputs}
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Text your Password'
                            placeholderTextColor={'grey'}
                        />
                    </View>
                    <View style={styles.main}>
                        <Text style={styles.title2}>Confirm Password</Text>
                        <TextInput
                            style={styles.inputs}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder='Text your Password'
                            placeholderTextColor={'grey'}
                        />
                    </View>

                </View>
                <View>
                    <View>
                        <TouchableOpacity style={styles.button1}
                           onPress={() => {
                            navigation.navigate('Livingroom');
                            handleSignup();
                        }}>
                            <Text style={styles.buttonText1}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'black', textAlign: 'center', opacity: 0.3 }}>---------------------------------OR--------------------------------</Text>
                    <View>
                        <TouchableOpacity style={styles.button3}>
                            <Image style={{}} source={require('./../images/Google.png')} />
                            <Text style={styles.buttonText3}>  Continue with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button4}>
                            <Image style={{}} source={require('./../images/Fb.png')} />
                            <Text style={styles.buttonText3}>  Continue with Facebook</Text>
                        </TouchableOpacity>

                        <View>
                            <Text style={{ color: 'black', textAlign: 'center' }}>
                                Dont’t have an account?
                                <Text style={{ color: 'blue' }}>Register</Text>
                            </Text>
                        </View>

                    </View>
                </View>
            </View>
        )
    }


    export default Signup

    const styles = StyleSheet.create({
        buttonTextlog: {
            color: 'black',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',

        },
        // arrow:{
        //     flexDirection:'row',
        //     alignItems:'center',



        // },
        buttonText1: {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center'
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
        main: {
            marginLeft: 10,
            marginVertical: 10,
        },
        button1: {
            backgroundColor: 'black',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            marginRight: 20,
            marginLeft: 20,
            flexBasis: 'auto',
            width: '90%',

        },
        button3: {
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            marginRight: 20,
            marginLeft: 20,

            width: '90%',

        },
        buttonText3: {
            color: 'black',
            fontSize: 13,
            fontWeight: 'bold',

        },
        button4: {
            flexDirection: 'row',
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 10,
            marginRight: 20,
            marginLeft: 20,
            flexBasis: 'auto',
            width: '90%',
        },
    })