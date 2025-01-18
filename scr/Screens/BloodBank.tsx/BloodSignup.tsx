import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const BloodSignup = () => {
    const [fullname, setFullname] = useState<any>('');
    const [email, setEmail] = useState<any>('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [bloodgroup, setBloodgroup] = useState('');
    const navigation=useNavigation<any>();

    const handleSignUp = async () => {
    
        try {
          const userCredential = await auth().createUserWithEmailAndPassword(email, password);
          const userId = userCredential.user.uid;
    
          // Save user data to Firestore
          await firestore().collection('Blood').doc(userId).set({
            userName: fullname,
            email: email,
            password:password,
            bloodgroup:bloodgroup,
        
          });
    
          // Dispatch user data to Redux
        //   dispatch(addUser({ userName: user, email: email }));
        //   console.log('User data dispatched:', { userName: user, email: email });

    
          Alert.alert('Success', 'User account created & data saved!');
          navigation.navigate('Home');
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
        <View style={{ flex: 1, backgroundColor: '#820000' }}>
            <Image style={{ marginLeft: 234 }} source={require('./../../images/cccc.png')} />
            <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 20, marginTop: -35, color: 'white' }}>Signup</Text>
            <View style={{marginTop:20 }}>
                <View>
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 30, fontSize: 15 }}>Full Name</Text>
                    <TextInput
                        style={{ marginLeft: 15, borderBottomWidth: 1, borderBottomColor: 'white', marginRight: 10, paddingVertical: 0, }}
                        value={fullname}
                        onChangeText={setFullname}
                        placeholder="Enter your Full Name"
                        placeholderTextColor="grey"
                        keyboardType="default"
                        autoCapitalize="none"
                    />
                </View>
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
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 20, fontSize: 15 }}>Date of Birth</Text>
                    <TextInput
                        style={{ marginLeft: 15, borderBottomWidth: 1, borderBottomColor: 'white', marginRight: 10, paddingVertical: 0, }}
                        value={dob}
                        onChangeText={setDob}
                        placeholder="Enter your Date of birth"
                        placeholderTextColor="grey"
                        keyboardType="number-pad"
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 20, fontSize: 15 }}>Age</Text>
                    <TextInput
                        style={{ marginLeft: 15, borderBottomWidth: 1, borderBottomColor: 'white', marginRight: 10, paddingVertical: 0, }}
                        value={age}
                        onChangeText={setAge}
                        placeholder="Enter your Age"
                        placeholderTextColor="grey"
                        keyboardType="number-pad"
                        autoCapitalize="none"
                    />
                </View>
                <View>
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 20, fontSize: 15 }}>Blood Group</Text>
                    <TextInput
                        style={{ marginLeft: 15, borderBottomWidth: 1, borderBottomColor: 'white', marginRight: 10, paddingVertical: 0, }}
                        value={bloodgroup}
                        onChangeText={setBloodgroup}
                        placeholder="Enter your Blood Group"
                        placeholderTextColor="grey"
                        keyboardType="default"
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
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity onPress={() => { handleSignUp() }}
                // onPress={()=>{navigation.navigate('Home')}} 
                style={styles.button}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BloodSignup

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        paddingVertical: 10,
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