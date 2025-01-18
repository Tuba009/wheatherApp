import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useDispatch } from 'react-redux';
import { addUser } from './../Store.tsx/Slices.tsx/Slicess1';
const Signuppage = () => {

    const dispatch = useDispatch<any>();
    const navigation = useNavigation<any>();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to password show


    const handleSignUp = async () => {
        if (password !== confirmPassword) {
          Alert.alert('Error', 'Passwords do not match!');
          return;
        }
    
        try {
          const userCredential = await auth().createUserWithEmailAndPassword(email, password);
          const userId = userCredential.user.uid;
    
          // Save user data to Firestore
          await firestore().collection('users').doc(userId).set({
            userName: user,
            email: email,
            createdAt: firestore.FieldValue.serverTimestamp(),
          });
    
          // Dispatch user data to Redux
          dispatch(addUser({ userName: user, email: email }));
          console.log('User data dispatched:', { userName: user, email: email });

    
          Alert.alert('Success', 'User account created & data saved!');
          navigation.navigate('Home2');
        } catch (error) {
          if ((error as any).code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'That email address is already in use!');
          } else if ((error as any).code === 'auth/invalid-email') {
            Alert.alert('Error', 'That email address is invalid!');
          } else {
            Alert.alert('Error', (error as any).message);
          }
        }
    };
    
    


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity style={{ justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', marginTop: 11 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Home');
                        }}
                    >
                        <Image
                            style={{ marginHorizontal: 20, marginTop: 10 }}
                            source={require('./../../images/leftarr.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.buttonTextlog}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <View style={{ height: 390 }}>
                <View style={styles.mainnametop}>
                    <Text style={styles.title2}>  User Name</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            value={user}
                            onChangeText={setUser}
                            placeholder="Enter your user Name"
                            placeholderTextColor="grey"
                        />
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.title2}>   Email</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your Email"
                            placeholderTextColor="grey"
                        />
                    </View>
                </View>
                <View style={styles.main}>
                    <Text style={styles.title2}> Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your password"
                            placeholderTextColor="grey"
                            secureTextEntry={!showPassword} // To toggle visibility
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="grey"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.main}>
                    <Text style={styles.title2}>  Confirm Password</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputs}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Enter your password again"
                            placeholderTextColor="grey"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="grey"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.button1}
                onPress={() => { handleSignUp() }}
            >
                <Text style={styles.buttonText1}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Signuppage;

const styles = StyleSheet.create({
    buttonTextlog: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 50,
        marginTop: 10,
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
        marginRight: 10
    },

    main: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    title2: {
        color: 'black',
        fontSize: 17,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    inputs: {
        flex: 1,
        color: 'black',
        fontSize: 16,
        paddingVertical: 10,
    },
    icon: {
        marginLeft: 10,
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
        marginTop: 100,
    },
});
