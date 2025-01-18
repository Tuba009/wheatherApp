import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon4 from 'react-native-vector-icons/Ionicons'
import Icon5 from 'react-native-vector-icons/Entypo'
import Icon6 from 'react-native-vector-icons/Feather'
import Icon7 from 'react-native-vector-icons/MaterialIcons'
import Icon8 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon9 from 'react-native-vector-icons/MaterialIcons'
import Icon10 from 'react-native-vector-icons/Entypo'
import Icon11 from 'react-native-vector-icons/Ionicons'
import Icon12 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const UserDetail = () => {
    const
        handleLogout = () => {

            auth()
                .signOut()
                .then(() => console.log('User signed out!'));


            //     Alert.alert(
            //       "Logout",
            //       "Are you sure you want to log out?",
            //       [
            //         { text: "Cancel", style: "cancel" },
            //         {
            //           text: "Yes",
            //           onPress: () => {
            //             auth()
            //               .signOut()
            //               .then(() => console.log('User signed out!'))
            //               .catch((error) => console.error('Error signing out:', error));
            //           },
            //         },
            //       ]
            //     );
        };
    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Account' as never)}>
                    <Image style={{ marginLeft: 10 }}
                        source={require('./../../images/arrow_back.png')} />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 40, fontSize: 20 }}>Setting</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                <Icon1 style={{ marginTop: 15, marginLeft: 10, color: 'black' }} name="user-follow" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Follow and invite friends</Text>
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
                <Icon8 style={{ marginTop: 15, marginLeft: 10 }} name="account-circle-outline" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>Account</Text>
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
                <TouchableOpacity>
                    <Icon12 style={{ marginTop: 15, marginLeft: 10 }} name="infocirlceo" size={30} color="black" /></TouchableOpacity>
                <Text style={{ color: 'black', marginTop: 17, marginLeft: 10 }}>About</Text>
            </View>
            <View>
                <Text style={{ color: 'blue', marginTop: 17, marginLeft: 10 }}>Switch account</Text>
                <TouchableOpacity onPress={() => { handleLogout() }}>
                    <Text style={{ color: 'red', marginTop: 17, marginLeft: 10, fontWeight: '400' }}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserDetail

const styles = StyleSheet.create({})