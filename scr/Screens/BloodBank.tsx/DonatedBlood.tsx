import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const DonatedBlood = () => {
    const navigation = useNavigation<any>();
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [chronicDiseases, setChronicDiseases] = useState(false);
    const [diseasesDetails, setDiseasesDetails] = useState('');
    const [donatedBefore, setDonatedBefore] = useState('');
    const [takingMedications, setTakingMedications] = useState(false);
    const [medicationsDetails, setMedicationsDetails] = useState('');
    const [allergies, setAllergies] = useState(false);
    const [allergiesDetails, setAllergiesDetails] = useState('');
    const [donationType, setDonationType] = useState('');
    const [donationLocation, setDonationLocation] = useState('');
    const [donationTime, setDonationTime] = useState('');
    const [consent, setConsent] = useState(false);

    const handleSubmit = async () => {
        if (!fullName || !age || !gender || !phoneNumber || !email || !address || !donationType || !donationLocation || !donationTime || !consent) {
            Alert.alert('Please fill in all required fields and agree to the terms.');

            return;
        }

        const donationData = {
            fullName,
            age,
            gender,
            phoneNumber,
            email,
            address,
            chronicDiseases,
            diseasesDetails: chronicDiseases ? diseasesDetails : null,
            donatedBefore,
            takingMedications,
            medicationsDetails: takingMedications ? medicationsDetails : null,
            allergies,
            allergiesDetails: allergies ? allergiesDetails : null,
            donationType,
            donationLocation,
            donationTime,
            consent,
            createdAt: firestore.FieldValue.serverTimestamp(),
        };

        try {
            await firestore().collection('BloodDonation').add(donationData);
            Alert.alert('Donation request submitted successfully!');
            navigation.goBack(); // Navigate back or reset form
        } catch (error) {
            console.error('Error adding document: ', error);
            Alert.alert('An error occurred. Please try again.');
        }
    };

    return (
        <View>
            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 50 }}>

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: 'black', backgroundColor: "pink" }}>
                    Blood Donation Form
                </Text>
                <Text style={{ fontSize: 18, marginBottom: 20, color: 'black' }}>
                    Help Save Lives - Donate Blood Today!
                </Text>

                {/* Personal Information Section */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Personal Information</Text>

                <Text style={{ color: 'black' }}>Full Name:</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                    placeholder="Enter your full name"
                    value={fullName}
                    onChangeText={setFullName}
                    placeholderTextColor={'grey'}
                />

                <Text style={{ color: 'black' }}>Age:</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                    placeholder="Enter your age"
                    keyboardType="numeric"

                    value={age}
                    onChangeText={setAge}
                    placeholderTextColor={'grey'}
                />


                <Text style={{ color: 'black' }}>Gender:</Text>
                <Picker
                    selectedValue={gender}
                    style={{ height: 50, width: '100%', marginBottom: 15, color: 'black' }}
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>

                <Text style={{ color: 'black' }}>Phone Number:</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                    placeholder="Enter your phone number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    placeholderTextColor={'grey'}
                />

                <Text style={{ color: 'black' }}>Email Address:</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    value={email}
                    placeholderTextColor={'grey'}
                    onChangeText={setEmail}
                />

                <Text style={{ color: 'black' }}>Address:</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                    placeholder="Enter your address"
                    value={address}
                    onChangeText={setAddress}
                    placeholderTextColor={'grey'}
                />

                {/* Health History Section */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, color: 'black' }}>
                    Health History
                </Text>

                <Text style={{ color: 'black' }}>Do you have any chronic diseases?</Text>
                <CheckBox
                    value={chronicDiseases}
                    onValueChange={setChronicDiseases}
                    tintColors={{ true: 'red', false: 'black' }}
                />

                {chronicDiseases && (
                    <TextInput
                        style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                        placeholder="Please specify"
                        value={diseasesDetails}
                        onChangeText={setDiseasesDetails}
                        placeholderTextColor={'grey'}
                    />
                )}

                <Text style={{ color: 'black' }}>Have you ever donated blood before?</Text>
                <Picker
                    selectedValue={donatedBefore}
                    style={{ height: 50, width: '100%', marginBottom: 15, color: 'black' }}
                    onValueChange={(itemValue) => setDonatedBefore(itemValue)}
                >
                    <Picker.Item label="Select Option" value="" />
                    <Picker.Item label="Yes" value="yes" />
                    <Picker.Item label="No" value="no" />
                </Picker>

                <Text style={{ color: 'black' }}>Are you currently taking any medications?</Text>
                <CheckBox
                    value={takingMedications}
                    onValueChange={setTakingMedications}
                    tintColors={{ true: 'red', false: 'black' }}
                />
                {takingMedications && (
                    <TextInput
                        style={{ borderBottomWidth: 1, marginBottom: 15, color: 'black' }}
                        placeholder="Please specify"
                        value={medicationsDetails}
                        placeholderTextColor={'grey'}
                        onChangeText={setMedicationsDetails}
                    />
                )}

                <Text style={{ color: 'black' }}>Do you have any allergies?</Text>
                <CheckBox
                    value={allergies}
                    onValueChange={setAllergies}
                    tintColors={{ true: 'red', false: 'black' }}
                />
                {allergies && (
                    <TextInput
                        style={{ borderBottomWidth: 1, marginBottom: 15 }}
                        placeholder="Please specify"
                        value={allergiesDetails}
                        onChangeText={setAllergiesDetails}
                    />
                )}

                {/* Donation Details Section */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, color: 'black' }}>
                    Donation Details
                </Text>

                <Text style={{ color: 'black' }}>Preferred Donation Type:</Text>
                <Picker
                    selectedValue={donationType}
                    style={{ height: 50, width: '100%', marginBottom: 15, color: 'black' }}
                    onValueChange={(itemValue) => setDonationType(itemValue)}
                >
                    <Picker.Item label="Select Type" value="" />
                    <Picker.Item label="Whole Blood" value="whole_blood" />
                    <Picker.Item label="Plasma" value="plasma" />
                    <Picker.Item label="Platelets" value="platelets" />
                </Picker>

                <Text style={{ color: 'black' }}>Preferred Donation Location:</Text>
                <Picker
                    selectedValue={donationLocation}
                    style={{ height: 50, width: '100%', marginBottom: 15, color: 'black' }}
                    onValueChange={(itemValue) => setDonationLocation(itemValue)}
                >
                    <Picker.Item label="Select Location" value="" />
                    <Picker.Item label="RYK" value="RYK" />
                    <Picker.Item label="Khanpure" value="location2" />
                    <Picker.Item label="SDK" value="location3" />
                </Picker>

                <Text style={{ color: 'black' }}>Preferred Time for Donation:</Text>
                <TextInput
                    style={{ borderBottomWidth: 1, marginBottom: 15, color: "black" }}
                    placeholder="Enter preferred time"
                    value={donationTime}
                    onChangeText={setDonationTime}
                />

                {/* Terms and Conditions Section */}
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, color: 'black' }}>
                    Terms and Conditions
                </Text>
                <CheckBox value={consent} onValueChange={setConsent} tintColors={{ true: 'red', false: 'black' }} />
                <Text style={{ color: 'black' }}>
                    I consent to donate blood and confirm that all information provided is accurate.
                </Text>

                {/* Submit Button */}
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: consent ? '#6200ee' : '#e0e0e0' }]}
                    onPress={handleSubmit}
                    disabled={!consent}
                >
                    <Text style={styles.buttonText}>Submit Your Donation Request</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default DonatedBlood;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
