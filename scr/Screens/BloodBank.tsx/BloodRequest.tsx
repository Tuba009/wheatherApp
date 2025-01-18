import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const BloodRequest = () => {
    const [activeGenders, setActiveGenders] = useState<any>({}); // Object to track each requester's status
    const navigation = useNavigation<any>();
    const handlePress2 = (index: number, value: number) => {
        setActiveGenders((prevState: any) => ({
            ...prevState,
            [index]: prevState[index] === value ? null : value, // Toggle between accept, decline, or null
        }));
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ alignItems: 'center', marginTop: -18 }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Requests</Text>
                </View>
                <TouchableOpacity onPress={()=>{navigation.navigate('DonorRequest')}}
                    style={{ marginTop: -30, marginLeft: -300 }}>
                    <Icon style={{ marginTop: -10 }} name="arrowleft" color={'white'} size={20} />
                </TouchableOpacity>
            </View>

            {/* ScrollView Wrapping all requesters */}
            <ScrollView style={{ flex: 1, marginTop: -154 }}>
                <View style={{ marginTop: 20 }}>
                    {Array(20).fill(null).map((_, index) => (
                        <View key={index} style={{ marginBottom: 20 }}>
                            <Text style={{ color: 'black', fontSize: 17, fontWeight: "600", marginLeft: 20 }}>
                                Requester #{1234 + index}
                            </Text>
                            <TouchableOpacity onPress={()=>(navigation.navigate('BloodHistory'))}>
                                <Text style={{ color: 'red', fontSize: 15, fontWeight: "400", marginLeft: 25, marginTop: 10 }}>
                                    View Details
                                </Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: -45, marginLeft: 250 }}>
                                <TouchableOpacity
                                    onPress={() => handlePress2(index, 0)}
                                    style={[
                                        styles.button5,
                                        activeGenders[index] === 0 && styles.buttonPressed,
                                    ]}>
                                    <Text
                                        style={[
                                            styles.buttonText2,
                                            activeGenders[index] === 0 && styles.textPressed,
                                        ]}
                                    >
                                        Accept
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => handlePress2(index, 1)}
                                    style={[
                                        styles.button6,
                                        activeGenders[index] === 1 && styles.buttonPressed,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.buttonText2,
                                            activeGenders[index] === 1 && styles.textPressed,
                                        ]}
                                    >
                                        Decline
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'black',
                                }}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default BloodRequest;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF6F6F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        shadowColor: '#00000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        height: "40%",
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 60,
    },
    buttonText2: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button5: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        height: 40,
        borderColor: "pink",
        marginTop: -15,
    },
    textPressed: {
        color: 'white',
    },
    buttonPressed: {
        backgroundColor: '#F44545',
    },
    button6: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: "80%",
        height: 40,
        borderColor: "pink",
        marginTop: 10,
        marginBottom: 10,
    },
});
