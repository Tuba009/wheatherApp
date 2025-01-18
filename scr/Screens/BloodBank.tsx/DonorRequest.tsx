import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const DonorRequest = () => {
    const [activeBloodGroup, setActiveBloodGroup] = useState<any>(null);
    const [activeGender, setActiveGender] = useState<any>(null);
    const [activeRelation, setActiveRelation] = useState<any>(null);
    const navigation =useNavigation<any>();

    const handlePress1 = (index: any) => {
        setActiveBloodGroup(index === activeBloodGroup ? null : index);
    };
    const handlePress2 = (index: any) => {
        setActiveGender(index === activeGender ? null : index);
    };
    const handlePress3 = (index: any) => {
        setActiveRelation(index === activeRelation ? null : index);
    };


    const [selectedNumber, setSelectedNumber] = useState<any>(null);

    const renderPickerItems = () => {
        return Array.from({ length: 100 }, (_, index) => (
            <Picker.Item key={index} label={`${index + 1}`} 
            value={index + 1} />
        ));
    };
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ alignItems: 'center', marginTop: -18, }}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Find Donor</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Homenotregisters')} 
                 style={{ marginTop: -30, marginLeft: -300 }}  >
                    <Icon style={{ marginTop: -10 }} name="arrowleft" color={'white'} size={20} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: -150 }}>
                <Text style={{ color: 'black', fontSize: 14, fontStyle: 'italic', fontWeight: '600', marginLeft: 20 }}>Patient blood group Type</Text>
                <View style={{ flexDirection: 'row', marginTop: 25, marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => handlePress1(0)} // All button
                        style={[styles.button2, activeBloodGroup === 0 && styles.buttonPressed]}>
                        <Text style={[styles.buttonText2, activeBloodGroup === 0 && styles.textPressed]}>A+</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress1(1)}
                        style={[styles.button2, activeBloodGroup === 1 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 1 && styles.textPressed]}>A-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress1(2)}
                        style={[styles.button2, activeBloodGroup === 2 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 2 && styles.textPressed]}>B+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress1(3)}
                        style={[styles.button2, activeBloodGroup === 3 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 3 && styles.textPressed]}>B-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handlePress1(4)}
                        style={[styles.button3, activeBloodGroup === 4 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 4 && styles.textPressed]}>AB+</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress1(5)}
                        style={[styles.button3, activeBloodGroup === 5 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 5 && styles.textPressed]}>AB-</Text>
                    </TouchableOpacity >
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 130, marginTop: -40 }}>
                    <TouchableOpacity onPress={() => handlePress1(6)}
                        style={[styles.button4, activeBloodGroup === 6 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 6 && styles.textPressed]}>O+</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress1(7)}
                        style={[styles.button4, activeBloodGroup === 7 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeBloodGroup === 7 && styles.textPressed]}>O-</Text>
                    </TouchableOpacity >
                </View>
            </View>


            <View style={{ marginTop: -230 }}>
                <Text style={{ color: 'black', fontSize: 14, fontStyle: 'italic', fontWeight: '600', marginLeft: 20 }}>Patient Gender</Text>
                <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => handlePress2(0)}
                        style={[styles.button5, activeGender === 0 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeGender === 0 && styles.textPressed]}>Male</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress2(1)}
                        style={[styles.button5, activeGender === 1 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeGender === 1 && styles.textPressed]}>Female</Text>
                    </TouchableOpacity >
                </View>
            </View>

            <View style={{ marginTop: -170 }}>
                <Text style={{ color: 'black', fontSize: 14, fontStyle: 'italic', fontWeight: '600', marginLeft: 20 }}>Patient Relation</Text>
                <View style={{ flexDirection: 'row', marginLeft: 28, marginTop: 20 }}>
                    <TouchableOpacity onPress={() => handlePress3(0)}
                        style={[styles.button6, activeRelation === 0 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeRelation === 0 && styles.textPressed]}>Fmaily</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress3(1)}
                        style={[styles.button6, activeRelation === 1 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeRelation === 1 && styles.textPressed]}>Friend</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => handlePress3(2)}
                        style={[styles.button6, activeRelation === 2 && styles.buttonPressed]} >
                        <Text style={[styles.buttonText2, activeRelation === 2 && styles.textPressed]}>Other</Text>
                    </TouchableOpacity >
                </View>
            </View>
            <View style={{ marginTop: -150 }}>
                <Text style={{ color: 'black', fontSize: 14, fontStyle: 'italic', fontWeight: '600', marginLeft: 20 }}>Patient Age</Text>
                <View style={{ marginLeft: 130, marginTop: -40, }}>
                    <Picker
                        selectedValue={selectedNumber}
                        onValueChange={(itemValue) => setSelectedNumber(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Age" value={null} style={{ color: 'white', }} />
                        {renderPickerItems()}
                    </Picker>
                    {selectedNumber !== null}
                </View>
            </View>
            <View style={{ marginTop: -300 }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('BloodRequest')}}
                 style={{ backgroundColor: "#820000",width:'70%',height:"20%",marginLeft:50,marginTop:140,borderRadius:10 }}>
                    <Text style={{ color: "white",paddingLeft:70,paddingTop:20 ,fontWeight:'800'}} >Send Request</Text>
                    <Image style={{width:"30%",height:"101%",marginLeft:177,marginTop:-43,borderRadius:10}} source={require('./../../images/cccc.png')}/>

                </TouchableOpacity >
            </View>


        </View>
    )
}

export default DonorRequest

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF6F6F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30, // More rounded corners
        shadowColor: '#00000', // Shadow color
        shadowOffset: { width: 2, height: 2 }, // Shadow offset
        shadowOpacity: 1, // Shadow transparency
        shadowRadius: 4, // Shadow blur radius
        elevation: 5, // Shadow for Android
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
    button2: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: "13%",
        height: "43%"
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
    button3: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: "13%",
        height: "43%"
    },
    button4: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: "15%",
        height: "40%"
    },
    button5: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: "40%",
        height: "50%",
        borderColor: "pink",
    },
    button6: {
        backgroundColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        width: "28%",
        height: "50%",
        borderColor: "pink",
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: "30%",
        width: '50%',
        backgroundColor: 'grey',
        borderRadius: 10,
        borderColor: "pink"
    },
    selectedText: {
        marginTop: 20,
        fontSize: 16,
        color: 'blue',
    },
})