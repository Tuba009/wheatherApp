import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Signup = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match!');
            return;
        }

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('Success', 'User account created & signed in!');
                navigation.navigate('Secondpage'as never);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Error', 'That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Error', 'That email address is invalid!');
                } else {
                    Alert.alert('Error', error.message);
                }
            });
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity
                style={{ justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginTop: 11 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Secondpage' as never)} >
                    <Image style={{ marginHorizontal: 20 }} source={require('./../images/leftarr.png')} />
                    </TouchableOpacity>
                    <Text style={styles.buttonTextlog}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: 390 }}>
                <View style={styles.mainnametop}>
                    <Text style={styles.title2}>Email</Text>
                    <TextInput
                        style={styles.inputs}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        placeholderTextColor="grey"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.main}>
                    <Text style={styles.title2}>Password</Text>
                    <TextInput
                        style={styles.inputs}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        placeholderTextColor="grey"
                        
                    />
                </View>
                <View style={styles.main}>
                    <Text style={styles.title2}>Confirm Password</Text>
                    <TextInput
                        style={styles.inputs}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder="Re-enter your password"
                        placeholderTextColor="grey"
                       
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button1} onPress={handleSignUp}>
                <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Signup;

const styles = StyleSheet.create({
    buttonTextlog: {
                color: 'black',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
        
            },
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
