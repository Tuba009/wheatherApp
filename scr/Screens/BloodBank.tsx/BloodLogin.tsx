import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const BloodLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation=useNavigation<any>();

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const firebaseUser = userCredential.user;

            // Fetch displayName from Firebase or Firestore if not available
            let userName = firebaseUser.displayName;
            
            if (!userName) {
                // Fetch user data from Firestore (Assuming user data is stored in Firestore under users collection)
                const userDoc = await firestore().collection('Blood').doc(firebaseUser.uid).get();
                userName = userDoc.exists ? userDoc.data()?.userName : 'No Name';
            }

            // Construct the user object for Redux
            const userState = {
                userName:userName, // Use displayName from Firebase or Firestore
                email: firebaseUser.email || '',
                uid: firebaseUser.uid,
            };

            // Dispatch to Redux store
            // dispatch(addUser(userState));

            // Navigate to home screen
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to login. Please try again.');
        }
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#820000' }}>
            <Image style={{ marginLeft: 234 }} source={require('./../../images/cccc.png')} />
            <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 20, marginTop: 10, color: 'white' }}>Login</Text>
            <View style={{ marginTop: 20 }}>
                <View>
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 20, fontSize: 15 }}>Email</Text>
                    <TextInput
                        style={{ marginLeft: 15, borderBottomWidth: 1, borderBottomColor: 'white', marginRight: 10, paddingVertical: 0, }}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        placeholderTextColor="grey"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 20, fontSize: 15 }}>PassWord</Text>
                    <TextInput
                        style={{ marginLeft: 15, borderBottomWidth: 1, borderBottomColor: 'white', marginRight: 10, paddingVertical: 0, }}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your Password"
                        placeholderTextColor="grey"
                        keyboardType="number-pad"
                        autoCapitalize="none"
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={{ padding: 10 }}>
                    <Text style={{ fontSize: 11, color: 'white', opacity: 0.8, marginLeft: 10, marginTop: 20 }}>Forgot password</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20}}>
                <TouchableOpacity 
               onPress={handleLogin}
                 style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:-110,marginLeft:-10}}>
                <Text style={{ color: 'white', textAlign: 'center', marginLeft: -30 }}>
                    Dont’t have an account?
                </Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('BloodSignup')}}
                style={{ marginTop: -22, marginLeft: 258 }}>
                    <Text style={{ color: 'pink' }}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default BloodLogin

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
        width: "40%",
        height: "27%",
        paddingHorizontal: 20,
        borderRadius: 30, // More rounded corners
        shadowColor: '#00000', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Shadow offset
        shadowOpacity: 1, // Shadow transparency
        shadowRadius: 4, // Shadow blur radius
        elevation: 5, // Shadow for Android
    },
    buttonText: {
        color: '#FF6F6F',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})