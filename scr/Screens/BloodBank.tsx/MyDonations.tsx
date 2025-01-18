import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const MyDonations = () => {
  const navigation = useNavigation<any>();
  const [donations, setDonations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch donations from Firestore
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        setDonations([]); // Clear previous data
        const donationSnapshot = await firestore().collection('bloodDonations').get();
        const donationList = donationSnapshot.docs.map(doc => ({
          id: doc.id, 
          ...doc.data(),
        }));
        console.log('Fetched Donations:', donationList); // Debug fetched data
        setDonations(donationList);
      } catch (error) {
        console.error('Error fetching donations:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchDonations();
  }, []);
  
  
  const renderDonationItem = ({ item }: { item: any }) => (
    <View style={styles.donationCard}>
      <Text style={styles.donationText}>Name: {item.fullName}</Text>
      <Text style={styles.donationText}>Age: {item.age}</Text>
      <Text style={styles.donationText}>Gender: {item.gender}</Text>
      <Text style={styles.donationText}>Donation Type: {item.donationType}</Text>
      <Text style={styles.donationText}>Location: {item.donationLocation}</Text>
      <Text style={styles.donationText}>Time: {item.donationTime}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      {/* Header */}
      <View style={{ alignItems: 'center', marginTop: -18 }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>My Donations</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: -20, marginLeft: -290 }}
        >
          <Icon style={{ marginTop: -10 }} name="arrowleft" color={'white'} size={20} />
        </TouchableOpacity>
      </View>

      {/* Donation List */}
      <View style={{ marginTop: -140 }}>
        {loading ? (
          <ActivityIndicator size="large" color="#FF6F6F" />
        ) : donations.length > 0 ? (
          <FlatList
            data={donations}
            renderItem={renderDonationItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={{ textAlign: 'center', color: 'gray' }}>No donations found.</Text>
        )}
      </View>
    </View>
  );
};

export default MyDonations;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF6F6F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '40%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  donationCard: {
    backgroundColor: '#FFE4E1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  donationText: {
    color: '#333',
    fontSize: 14,
    marginBottom: 5,
  },
});
