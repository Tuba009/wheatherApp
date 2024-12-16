import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const contacts = [
  { id: '1', name: 'John Doe', phone: '123-456-7890' },
  { id: '2', name: 'Jane Smith', phone: '987-654-3210' },
  { id: '3', name: 'Jim Beam', phone: '456-789-1230' },
  
];
const navigation= useNavigation()

const HomeScreens = ({ navigation:any }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, margin: 20 }}>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ContactDetail', { contact: item })
            }
          >
            <View style={{ padding: 15 }}>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreens;
