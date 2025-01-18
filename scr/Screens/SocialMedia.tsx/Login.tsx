import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'; // Import Firestore
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './../Store.tsx/Slices.tsx/Slicess1';

const Login = () => {
    const dispatch = useDispatch<any>();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State  password visibility
    const navigation = useNavigation<any>();

    const handleLogin = async () => {
        if (Email.trim() === '' || Password.trim() === '') {
            Alert.alert('Error', 'Please fill all input fields.');
            return;
        }

        try {
            const userCredential = await auth().signInWithEmailAndPassword(Email, Password);
            const firebaseUser = userCredential.user;

            // Fetch displayName from Firebase or Firestore if not available
            let userName = firebaseUser.displayName;
            
            if (!userName) {
                // Fetch user data from Firestore (Assuming user data is stored in Firestore under users collection)
                const userDoc = await firestore().collection('users').doc(firebaseUser.uid).get();
                userName = userDoc.exists ? userDoc.data()?.userName : 'No Name';
            }

            // Construct the user object for Redux
            const userState = {
                userName:userName, // Use displayName from Firebase or Firestore
                email: firebaseUser.email || '',
                uid: firebaseUser.uid,
            };

            // Dispatch to Redux store
            dispatch(addUser(userState));

            // Navigate to home screen
            navigation.navigate('Home2');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to login. Please try again.');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={{ flexDirection: 'row', marginTop: 11 }}>
                    <Image style={{ marginHorizontal: 20 }} source={require('./../../images/leftarr.png')} />
                    <Text style={styles.buttonTextlog}> Log In</Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: 390 }}>
                <View style={styles.mainnametop}>
                    <Text style={styles.title2}> Email</Text>
                    <TextInput
                        style={styles.inputs}
                        value={Email}
                        onChangeText={setEmail}
                        placeholder=" Text your Email"
                        placeholderTextColor="grey"
                    />
                </View>

                <View style={styles.main}>
                    <Text style={styles.title2}> Password</Text>
                    <View style={styles.passwordContainer}>
                        <TextInput
                            style={styles.passwordInput}
                            value={Password}
                            onChangeText={setPassword}
                            placeholder=" Text your Password"
                            placeholderTextColor="grey"
                            secureTextEntry={!showPassword} // Toggles secureTextEntry
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="grey" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                    <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => navigation.navigate('Otp')}>
                        <Text style={{ fontSize: 11, color: 'blue', opacity: 0.3 }}>Forgot password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.button1} onPress={handleLogin}>
                    <Text style={styles.buttonText1}>Log In</Text>
                </TouchableOpacity>
                <Text style={{ color: 'black', textAlign: 'center', opacity: 0.3 }}>
                    ---------------------------------OR--------------------------------
                </Text>
                <TouchableOpacity style={styles.button3}>
                    <Image source={require('./../../images/Google.png')} />
                    <Text style={styles.buttonText3}> Continue with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                    <Image source={require('./../../images/Fb.png')} />
                    <Text style={styles.buttonText3}> Continue with Facebook</Text>
                </TouchableOpacity>

                <View>
                    <Text style={{ color: 'black', textAlign: 'center', marginLeft: -30 }}>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity style={{ marginTop: -22, marginLeft: 255 }} onPress={() => navigation.navigate('Signuppage')}>
                        <Text style={{ color: 'blue' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;

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
        textAlign: 'center',
    },
    mainnametop: {
        marginLeft: 10,
        marginVertical: 10,
        marginTop: 40,
    },
    title2: {
        color: 'black',
        fontSize: 17,
        marginLeft: 15,
    },
    inputs: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 20,
        backgroundColor: '#fafafa',
        color: 'black',
        marginRight: 10,
        marginTop: 5,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 20,
        backgroundColor: '#fafafa',
        paddingHorizontal: 10,
        marginRight: 10,
        marginTop: 5,
    },
    passwordInput: {
        flex: 1,
        color: 'black',
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
        width: '90%',
    },
});
