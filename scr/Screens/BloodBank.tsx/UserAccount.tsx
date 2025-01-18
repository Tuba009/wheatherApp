import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon8 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/Entypo'
import Icon6 from 'react-native-vector-icons/Feather'
import Icon7 from 'react-native-vector-icons/MaterialIcons'
import Icon12 from 'react-native-vector-icons/AntDesign'
import Icon9 from 'react-native-vector-icons/MaterialIcons'
import Icon10 from 'react-native-vector-icons/Entypo'
import Icon11 from 'react-native-vector-icons/Ionicons'
import Icon13 from 'react-native-vector-icons/Feather'
import firestore from '@react-native-firebase/firestore';

const UserAccount = () => {
const navigation=useNavigation<any>();
const [email, setEmail] = useState<any>('gh');
    const [name, setName] = useState<any>(''); 
    const handleLogout = async () => {
        try {
            const currentUser = auth().currentUser;
            if (currentUser) {
                await auth().signOut();
                console.log('User signed out successfully.');
                
                navigation.navigate('BloodLogin');
            } else {
                console.log('No user is currently signed in.');
            }
        } catch (error) {
            console.error('Error signing out:', error);
            Alert.alert('Error', 'Failed to sign out. Please try again.');
        }
    };

    useEffect(() => {
        const fetchBloodGroup = async () => {
            try {
                const currentUser = auth().currentUser;

                if (currentUser) {
                    const userDoc = await firestore()
                        .collection('Blood') // Change to your collection name
                        .doc(currentUser.uid) // Fetch document by uid
                        .get();

                    if (userDoc.exists) {
                        const userData = userDoc.data();
                        setName(userData?.userName || 'User');
                        setEmail(userData?.email || 'Unknown'); // Set blood group or default to "Unknown"
                    } else {
                        console.log('User document does not exist.');
                    }
                }
            } catch (error) {
                console.error('Error fetching blood group:', error);
            }
        };

        fetchBloodGroup();
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity>
                    <Icon8 style={{ marginTop: 100, marginLeft: 5 }} name="account-circle-outline" size={100} color="grey" />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', marginTop: 120, paddingLeft:20 }}>
                    {name}
                </Text>
                <Text style={{ color: 'black', fontSize: 15, marginTop: 160, marginLeft: -130 }}>
                    {email}
                </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Icon2 style={{ marginTop: 15, marginLeft: 10 }} name="notifications-none" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Notifications</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon3 style={{ marginTop: 15, marginLeft: 10 }} name="hearto" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Liked</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon4 style={{ marginTop: 15, marginLeft: 10 }} name="bookmark-outline" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Saved</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon5 style={{ marginTop: 15, marginLeft: 10 }} name="back-in-time" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Arichive</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon6 style={{ marginTop: 15, marginLeft: 10 }} name="lock" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Privacy</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon7 style={{ marginTop: 15, marginLeft: 10 }} name="accessibility" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Accessibility</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon9 style={{ marginTop: 15, marginLeft: 10 }} name="language" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Language</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Icon10 style={{ marginTop: 15, marginLeft: 10 }} name="lab-flask" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Early access</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icon11 style={{ marginTop: 15, marginLeft: 10 }} name="help-buoy-outline" size={30} color="black" /></TouchableOpacity>
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Help</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('MyDonations')}} >
                    <Icon12 style={{ marginTop: 15, marginLeft: 10 }} name="infocirlceo" size={30} color="black" /></TouchableOpacity>
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>My Donations</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity  onPress={() => { handleLogout() }}>
                    <Icon13 style={{ marginTop: 15, marginLeft: 10 }} name="log-out" size={30} color="red" /></TouchableOpacity>
                <Text style={{ color: 'red', marginTop: 17, marginLeft: 10 }}>Logout</Text>
            </View>
        </View>
    )
}

export default UserAccount

const styles = StyleSheet.create({})


