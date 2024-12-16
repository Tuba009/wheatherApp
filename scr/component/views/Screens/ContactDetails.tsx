import { Image, StyleSheet, Text, TouchableOpacity, View, ViewBase, } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ContactDetails = ({ route }: any) => {
  const { Save,index } = route.params
  console.log('DATA ====>', Save)
console.log('index',index)
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      getStoredObjectValue()
    }, [],)
  )
  const [contacts, setContacts] = useState([])

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
      navigation.goBack()
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.Header}>
      

        <View style={styles.headertext}>
          <Text style={styles.Headertextstyle}>Contacts</Text>
          
        </View>

        <View style={styles.image}>
        <TouchableOpacity style={{marginRight:220}} 
         onPress={() => navigation.goBack()}>
                    <Icon name="arrowleft" size={20} color="black" />
                    </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.search} source={require('./../../../images/search2.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('./../../../images/threedots.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main} />

      <View style={styles.contactpiccontainer}>
        <Image style={styles.Contactpic} source={require('./../../../images/icon.png')} />
      </View>

      <View style={styles.Iconcontainer}>
        <TouchableOpacity style={styles.delete}  onPress={() => deleteContact(index)} >
        <Icon  name="delete" size={20} color="red"
        />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.delete} source={require('./../../../images/edit.png')} />
        </TouchableOpacity>
      </View>



      <View style={styles.main2} />


      <Text style={styles.contactname}>{Save.contactName}</Text>
      {/* {contacts.contactName} */}

      <View style={styles.spaccer4} />


      <View style={styles.contactdetail}>
        <Text style={styles.number}>{Save.contactNumber}</Text>
        {/* {contacts.contactNumber} */}

        <View style={styles.detailicon}>
          <TouchableOpacity>
            <Image
              style={styles.callicon}
              source={require('./../../../images/phoneicon.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.callicon}
              source={require('./../../../images/message.png')}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.spaccer3} />

      <View style={{ flex: 1, }}>
        <View>
          <Text style={styles.callhistoryheading}>Call history</Text>
        </View>

        <View style={styles.main2} />
        <View style={styles.main2} />

        <TouchableOpacity>
          <View style={styles.callhistorylistelement}>

            <View>
              <Text style={styles.callhistorytext}>Apr 27, 14:16</Text>
              <View style={styles.calledtonumcontainer}>
                <Text style={styles.calledtonumtext}>+998901234567</Text>
                {/* <Image
                      style={{ width: 12, height: 12, alignSelf: 'center' }}
                      source={require('../../assets/images/callmade_1.png')}
                   /> */}
              </View>
            </View>
            <View style={styles.aligner}>
              <Text style={styles.calledtonumtext}>Didn't connect</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.callhistorylistelement}>

            <View>
              <Text style={styles.callhistorytext2}>Apr 20, 10:35</Text>
              <View style={styles.calledtonumcontainer}>
                <Text style={styles.calledtonumtext}>+998901234567</Text>
              </View>
            </View>
            <View style={styles.aligner}>
              <Text style={styles.calledtonumtext}>Rang 5 times</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.callhistorylistelement}>

            <View>
              <Text style={styles.callhistorytext}>Mar 05, 19:23</Text>
              <View style={styles.calledtonumcontainer}>
                <Text style={styles.calledtonumtext}>+998901234567</Text>
              </View>
            </View>
            <View style={styles.aligner}>
              <Text style={styles.calledtonumtext}>Outgoing 15 min 12 sec</Text>
            </View>
          </View>

        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.callhistorylistelement}>
            <View>
              <Text style={styles.callhistorytext}>Feb 12, 08:03</Text>
              <View style={styles.calledtonumcontainer}>
                <Text style={styles.calledtonumtext}>+998901234567</Text>
              </View>
            </View>
            <View style={styles.aligner}>
              <Text style={styles.calledtonumtext}>Incoming 30 sec</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  )
}


export default ContactDetails


const styles = StyleSheet.create({
  name:
  {
    width: 160,
    height: 29,
    left: 100,
    color: '#000000',
    fontSize: 20,
    fontWeight: "400",
    marginTop: -50
  },
  imageicon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    marginHorizontal: 70,
    marginVertical: 60,
    marginTop: 80,

  },
  Contact: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 5,
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: 'black',

  },
  number: {
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal: 35,
    color: 'black',
    marginTop: 20,


  },
  call: {
    width: 60,
    height: 14,
    top: 363,
    left: 15,

    color: 'black'
  },

  container: {
    backgroundColor: '#fafafb',
    // backgroundColor: 'black',
    flex: 1,
  },
  Header: {
    backgroundColor: 'white',
  },
  headertext: {
    position: 'absolute',
    width: '50%',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'white'
  },
  Headertextstyle: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  
  },
  search: {
    marginHorizontal: 30,
  },
  image: {
    marginTop: 15,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  main: {
    flex: 0.15,
  },
  main2: {
    flex: 0.05,
  },
  spaccer3: {
    flex: 0.17,
  },
  spaccer4: {
    flex: 0.06,
  },
  aligner: {
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  contactpiccontainer: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flex: 0.23,
  },
  Contactpic: {
    // backgroundColor: 'pink',
    height: 150,
    width: 150,
  },
  Iconcontainer: {
    marginHorizontal: 20,
    alignSelf: 'flex-end',
    marginTop: -10,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '20%',
  },
  delete: {
    marginHorizontal: 5,
    width: 20,
    height: 20,
  },
  contactname: {
    fontSize: 22,
    color: 'black',
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: 20,
  },
  callicon: {
    width: 40,
    height: 40,
    // backgroundColor:'green'
  },
  contactdetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 9,
  },
  detailtext: {
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
  },
  detailicon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '25%',
  },
  callhistoryheading: {
    color: 'grey',
    fontSize: 15,
    marginHorizontal: 15,
  },
  callhistorylistelement: {
    marginVertical: 10,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    // backgroundColor: 'black'
  },
  callhistorytext: {
    color: 'black',
    fontSize: 16,
  },
  callhistorytext2: {
    color: 'red',
    fontSize: 16,
  },
  calledtonumcontainer: {
    flexDirection: 'row'
  },
  calledtonumtext: {
    color: 'grey',
    fontSize: 12,
  },


})