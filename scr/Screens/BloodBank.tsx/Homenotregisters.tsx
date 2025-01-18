import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Homenotregisters = () => {
    const navigation = useNavigation<any>();
    const [isDonorEligible, setIsDonorEligible] = useState(false); // Donor eligibility
    const [bloodGroup, setBloodGroup] = useState<any>('gh');
    const [name, setName] = useState<any>(''); 

    // Fetch user's blood group on component mount
    useEffect(() => {
        const fetchBloodGroup = async () => {
            try {
                const currentUser = auth().currentUser;

                if (currentUser) {
                    const userDoc = await firestore()
                        .collection('Blood') 
                        .doc(currentUser.uid)
                        .get();

                    if (userDoc.exists) {
                        const userData = userDoc.data();
                        setName(userData?.userName || 'User');
                        setBloodGroup(userData?.bloodgroup || 'Unknown'); // Set blood group or default to "Unknown"
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
        <View style={{ flex: 1, backgroundColor: "#ffff" }}>
            <View style={{ alignItems: 'center', marginTop: -58 }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Hello {name}</Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }}
                    style={{ marginTop: -30, marginLeft: -300 }}>
                    <Icon style={{ marginTop: -270 }} name="reorder-three" color={'white'} size={30} />
                </TouchableOpacity>
            </View>

            {/* Blood Group Card */}
            <View style={{ borderWidth: 1, borderRadius: 30, width: "36%", height: "30%", marginTop: -240, marginLeft: 40, backgroundColor: "white" }}>
                <View style={{ paddingTop: 30, paddingLeft: 10 }}>
                    <Text style={{ color: 'black', paddingLeft: 1, fontWeight: "600", fontSize: 12 }}>Your Blood Group</Text>
                    <TouchableOpacity>
                        <Icon2 style={{ paddingLeft: 13, paddingTop: 15 }} name="drop" color={'red'} size={90} />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>
                        {bloodGroup} {/* Display user's blood group */}
                    </Text>
                </View>
            </View>

            {/* Donor Status Card */}
            <View style={{ borderWidth: 1, borderRadius: 30, width: "35%", height: "30%", marginTop: -220, marginLeft: 200, backgroundColor: "white" }}>
                <View style={{ paddingTop: 30, paddingLeft: 10 }}>
                    <Text style={{ color: 'black', paddingLeft: 3, fontWeight: "600", }}>Donor status</Text>
                    <TouchableOpacity onPress={() => setIsDonorEligible(prevState => !prevState)}>
                        <Icon1
                            style={{ paddingLeft: 13, paddingTop: 15 }}
                            name={isDonorEligible ? "check" : "circle-with-cross"}
                            color={isDonorEligible ? '#4CAF50' : '#FFC453'}
                            size={80}
                        />
                    </TouchableOpacity>
                    <Text style={{ color: 'grey', paddingLeft: 2 }}>
                        {isDonorEligible ? "You are eligible to donate blood." : "Please get checked up first to donate"}
                    </Text>
                </View>
            </View>

            {/* "Find Donor" Button */}
            <View style={{ marginTop: -80 }}>
                <TouchableOpacity onPress={() => navigation.navigate('DonorRequest')}
                    style={{ backgroundColor: "#820000", width: '70%', height: "20%", marginLeft: 50, marginTop: 140, borderRadius: 20 }}>
                    <Text style={{ color: "white", paddingLeft: 70, paddingTop: 20, fontWeight: '800' }} >Find Donor</Text>
                    <Image style={{ width: "30%", height: "101%", marginLeft: 177, marginTop: -43, borderRadius: 20 }} source={require('./../../images/cccc.png')} />
                </TouchableOpacity >
            </View>

            {/* "Donate Blood" Button */}
            <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('DonatedBlood')}}
                    style={[styles.donateButton, { backgroundColor: isDonorEligible ? "#820000" : "#D3D3D3" }]}
                    disabled={!isDonorEligible}
                >
                    <Text style={{ color: "white", paddingLeft: -10, paddingTop: 20, fontWeight: '800' }} >Donate Blood</Text>
                    <Image style={{ width: "30%", height: "101%", marginLeft: 177, marginTop: -43, borderRadius: 20 }} source={require('./../../images/cccc.png')} />
                </TouchableOpacity >
            </View>
        </View>
    );
};

export default Homenotregisters;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF6F6F',
        paddingVertical: 110,
        paddingHorizontal: 20,
        borderRadius: 80,
        shadowColor: '#00000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        height: "80%",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
    },
    donateButton: {
        width: '70%',
        height: "35%",
        marginLeft: 50,
        borderRadius: 20,
        marginTop: -90,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
