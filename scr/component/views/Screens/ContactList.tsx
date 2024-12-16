import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState, useCallback, } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/AntDesign';
export const ContactList = () => {

  const [contacts, setContacts] = useState([])
  const navigation = useNavigation<any>();

  useFocusEffect(
    useCallback(() => {
      getStoredObjectValue()
    }, [])
  )


  const getStoredObjectValue = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('CONTACTS')
      const storedContactList = JSON.parse(jsonValue as any)
      setContacts(storedContactList as any)
      console.log('Got Stored Value', storedContactList)
    } catch (error) {
      console.log('Error', error)
    }
  }
  const deleteContact = async (index: any) => {
    try {
      const filteredArray = contacts.filter((_, i) => i !== index)
      setContacts(filteredArray)
      const jsonValue = JSON.stringify(filteredArray)
      console.log('Contact List', jsonValue)
      await AsyncStorage.setItem('CONTACTS', jsonValue)
    } catch (error) {
      console.log('Error', error)
    }
  }

  const renderContacts = ({ item, index }: any) => {
    return (

      <View style={styles.Contact}>
        <TouchableOpacity onPress={() => navigation.navigate('Contacts', { Save: item, index })}>

          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity >
              <Image source={require('./../../../images/icon.jpg')} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>

              <Text style={styles.storedtext}>
                {item.contactName} {item.SurName}
              </Text>

              <Text style={styles.storedtext}>
                {item.contactNumber}
              </Text>
            </View>
            <TouchableOpacity style={{ position: 'absolute', marginLeft: 280, height: 31, width: 31, marginRight: 10, alignItems: "flex-end" }} >
              <Icon name="phone" size={20} color="green" />
              <Icon onPress={() => deleteContact(index)} name="delete" size={20} color="red"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  const Emptylistshower = () => {
    return contacts.length !== 0 ? <FlatList
      data={contacts}
      renderItem={renderContacts} /> :
      <View style={styles.emptylistshower}>
        <Image style={styles.emptybox} source={require('./../../../images/empty.png')} />
        <Text style={styles.emptytext}>You have no contacts yet</Text>
      </View>
  }

  return (
    <View>
      <View style={styles.Headercontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Image style={{marginVertical:5}}
            source={require('./../../../images/arrow_back.png')} />
        </TouchableOpacity>

        <Text style={styles.ccontactlistname}>Contacts</Text>

        {/* <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
        <Image 
                     source={require('./../../../images/check.png')}/>
        </TouchableOpacity> */}

      </View>



      {/* <FlatList
    data={contacts}
    renderItem={renderContacts}
    // renderItem={Emptylistshower}
   /> */}
      <Emptylistshower />

    </View>
  )
}
export default ContactList;
const styles = StyleSheet.create({

  Headercontainer: {

    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 30
  },
  contactnamess: {
    backgroundColor: 'black',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12
  },

  Contact: {
    // backgroundColor: 'white',
    marginVertical: 5,
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,


  },
  storeddata: {
    backgroundColor: 'transperant',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginRight: 20,
    marginTop: 20,
    flex: 0,

  },
  storedtext: {
    color: 'black',
    fontSize: 18,
    textAlignVertical: 'center'
  },
  ccontactlistname: {
    color: 'black',
    marginHorizontal: -10,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",

  },
  emptylistshower: {
    alignItems: 'center',
    marginBottom: 800,
    marginVertical: -70,
    justifyContent: 'center',
    color: 'black',
  },
  emptybox: {
    height: 135,
    width: 140,
    marginTop: 500
  },
  emptytext: {
    padding: 20,
    color: "black",
    fontWeight: 'bold',
    fontSize: 15,


  },



})