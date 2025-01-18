import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


const BloodHistory = () => {
    const navigation=useNavigation<any>();
    const [activeb, setActiveb] = useState<any>(null);
    
    const handlePress3 = (index: any) => {
        setActiveb(index === activeb ? null : index);
    };
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ alignItems: 'center', marginTop: -18, }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>History</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('BloodRequest')} 
                style={{ marginTop: -30, marginLeft: -300 }}  >
                    <Icon style={{ marginTop: -10 }} name="arrowleft" color={'white'} size={25} />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: -145 }}>
                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <TouchableOpacity onPress={() => handlePress3(0)}
                        style={[styles.button6, activeb === 0 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeb === 0 && styles.textPressed]}>Donated</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress3(1)}
                        style={[styles.button6, activeb === 1 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeb === 1 && styles.textPressed]}>Received</Text>
                    </TouchableOpacity >
                </View>
                <View
                    style={{
                        borderBottomWidth: 1,
                        borderBottomColor: 'red',
                        marginTop: -18

                    }}
                />
            </View>
            <View style={{ flex: 1, marginTop: -150 }}>
            <ScrollView style={{ flex: 1 }}>
                {Array(40).fill(null).map((_, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                        <View style={styles.row}>
                            <Text style={styles.blackText}>Date: 11/12/18</Text>
                            <Text style={[styles.blackText, { marginLeft: 70 }]}>
                                Receiver ID: #43EQ
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.greyText}>Location: 123, XYZ Apt</Text>
                            <Text style={[styles.greyText, { marginLeft: 30 }]}>
                                Qty: 0.6 ounces
                            </Text>
                        </View>
                        <View style={styles.divider} />
                    </View>
                ))}
            </ScrollView>
        </View>


        </View>
    )
}

export default BloodHistory

const styles = StyleSheet.create({
    button6: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: "46%",
        height: "50%",
        borderColor: "pink",
    },
    textPressed: {
        color: 'white'
    },
    buttonPressed: {
        backgroundColor: '#F44545',
    },
    buttonText2: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#FF6F6F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30, // More rounded corners
        shadowColor: '#00000', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Shadow offset
        shadowOpacity: 1, // Shadow transparency
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
        marginTop: 60
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
        marginLeft: 20,
    },
    blackText: {
        color: 'black',
    },
    greyText: {
        color: 'grey',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginTop: 2,
    },
})