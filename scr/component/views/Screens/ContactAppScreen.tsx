import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icons from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import { launchImageLibrary } from 'react-native-image-picker'

export const ContactAppScreen = ({ route }: any) => {
    const { data, index } = route.params || {}
    console.log('data', data)
    console.log('index:===>', index)


    const [selectedImage, setSelectedImage] = useState<any>(null)

    const openImagePicker = () => {
        const options: any = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,

        };

        launchImageLibrary(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };

    const [name, setName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [SurName, setSurName] = useState('')
    const [contacts, setContacts] = useState([])
    const navigation = useNavigation<any>();
    //use to show the asynobjects
    useEffect(() => {
        getStoredObjectValue()
    }, [])

    const saveConatct = () => {
        if (name !== '' && SurName !== '' && phoneNumber !== '') {
            const contactData = [...contacts, { contactName: name, SurName: SurName, contactNumber: phoneNumber, selectedImage }]
            console.log('Contact List', contactData)
            storeObjectValue(contactData)

            setContacts(contactData as any)
            setName('')
            setSurName('')
            setPhoneNumber('')
            setSelectedImage(null)
            navigation.navigate('ContactList' as never)
        } else {
            Alert.alert('Kindly fill all field')
        }
    }

 
    const updateContact = () => {

        const oldContactslist = [...contacts] as any
        oldContactslist[index] = { name, SurName, phoneNumber, selectedImage }
        console.log('Updating contact at index:', index);
        storeObjectValue(oldContactslist)
        navigation.navigate('Contactlistscreen' as never)
  
     }
   


    const storeObjectValue = async (contactList: any) => {
        try {
            const jsonValue = JSON.stringify(contactList)
            console.log('Contact List', contactList)
            await AsyncStorage.setItem('CONTACTS', jsonValue)

            console.log('Your value stored')
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

    const getStoredObjectValue = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('CONTACTS')
            const storedContactList = JSON.parse(jsonValue as any)
            if (storedContactList !== null) {
                setContacts(storedContactList as any)
            }

            console.log('Got Stored Value', storedContactList)
        } catch (error) {
            console.log('Error', error)
        }
    }



    // const renderContacts = ({ item, index }: any) => {
    //     return (

    //         <View style={styles.Contact}>
    //             <View style={{ flexDirection: 'row', }}>
    //                 <Image source={require('./../../../images/icon.jpg')} />
    //                 <View style={{ flexDirection: 'column' }}>
    //                     <Text style={styles.storedtext}>
    //                         {item.contactName} {item.SurName}
    //                     </Text>
    //                     <Text style={styles.storedtext}>
    //                         {item.contactNumber}
    //                     </Text>
    //                 </View>
    //                 <TouchableOpacity style={{ alignItems: 'flex-end', marginLeft: 140 }} >
    //                     <Icon name="phone" size={20} color="green" />
    //                 </TouchableOpacity>
    //                 <TouchableOpacity onPress={() => deleteContact(index)} style={{ alignItems: 'flex-end', marginRight: 20 }}>
    //                     <Icon name="delete" size={20} color="red" />
    //                 </TouchableOpacity>
    //             </View>
    //         </View>
    //     )
    // }

    return (

        <View style={styles.body}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Feed')
                }} >
                    <Image style={{marginLeft:10,marginTop:5}}
                        source={require('./../../../images/arrow_back.png')} />
                </TouchableOpacity>
                <Text style={styles.headertxt}>Add</Text>
                <TouchableOpacity style={{ marginLeft: 215 }}
                     onPress={index !== undefined && index !== null ? updateContact : saveConatct}>
                    <Image
                        source={require('./../../../images/check.png')} />
                </TouchableOpacity>
            </View>

            <View >
                <View>
                <TouchableOpacity
                    onPress={openImagePicker}
                    style={{marginLeft:215,marginTop:100}}>
                    <Icon style={{marginLeft:20,marginVertical:10}} name="edit" size={30} color="black" />
                    <TouchableOpacity 
                    onPress={openImagePicker}>
                                { selectedImage ?   selectedImage  &&
                                               <Image style={{ height: 140, width: 140, borderRadius: 100,marginLeft:-120,marginVertical:-110 }} source={{ uri: selectedImage }} />:
                                            <Icon1 style={{marginLeft:-120,marginVertical:-130,}} name="account-circle" size={150} color="grey" />
                                           }
                                </TouchableOpacity>

                    {/* {
                        selectedImage &&
                        <Image style={{ height: 100, width: 100, borderRadius: 25, marginVertical: 50, marginLeft: 110 }} source={{ uri: selectedImage }} />
                    } */}
                </TouchableOpacity>

                    {/* <TouchableOpacity style={{ marginLeft: 210, marginTop: 80 }}>
                        <Icon name="camera" size={30} color="black" />
                    </TouchableOpacity> */}
                </View>
                <View style={styles.mainnametop}>
                    <Text style={styles.title2}> Name </Text>
                    <TextInput
                        style={styles.inputs}
                        value={name}
                        onChangeText={setName}
                        placeholder='Enter Name'
                        placeholderTextColor={'grey'}

                    />
                </View>

                <View style={styles.main}>
                    <Text style={styles.title2}> SurName</Text>
                    <TextInput
                        style={styles.inputs}
                        value={SurName}
                        onChangeText={setSurName}
                        placeholder='SurName'
                        placeholderTextColor={'grey'}

                    />
                </View>

                <View style={styles.main}>
                    <Text style={styles.title2}> Phone Number</Text>
                    <TextInput
                        style={styles.inputs}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        placeholder='+923__-________'
                        placeholderTextColor={'grey'}
                        keyboardType='phone-pad'
                    />
                </View>
                {/* <TouchableOpacity
                    onPress={openImagePicker}>
                    <Image style={{ height: 50, width: 50, marginHorizontal: 30 }} source={require('./../../../images/camera.png')} />
                    <Text style={styles.savecontact}>Add Image From gallery</Text>
                    {
                        selectedImage &&
                        <Image style={{ height: 100, width: 100, borderRadius: 25, marginVertical: 50, marginLeft: 110 }} source={{ uri: selectedImage }} />
                    }
                </TouchableOpacity> */}
            </View>
            {/* <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                 onPress={saveConatct} 
                 style={styles.button} >
                  <Text style={styles.savecontact} >Save</Text>
                </TouchableOpacity>
               </View> */}

            {/* <TouchableOpacity>
               //    <Button onPress={() => navigation.navigate('More' as never)}>Go to More</Button>
              //    <Button onPress={() => navigation.navigate('More', { screen:  'Contacts' })}>Go to contact list
               //    </Button>
               // </TouchableOpacity> */}
            {/* //     <TouchableOpacity  
                      onPress={saveConatct} >
                     <Text style={{ textAlign: 'center', color: 'black' }}>Save</Text>
                </TouchableOpacity> */}
            {/* <Text style={styles.contactlist}>Contact  List</Text>  */}

            {/* <FlatList
                    data={contacts}
                    renderItem={renderContacts}
                />  */}
        </View>


    )
}
export default ContactAppScreen;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    header: {
        height: 70,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomColor: 'gray',
        flexDirection: 'row',
    },
    headertxt: {
        color: 'black',
        fontSize: 21,
        fontWeight: '500',
        marginLeft: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
    },
    mainnametop: {
        marginLeft: 10,
        marginVertical: 10,
        marginTop: 20
    },
    Addcontacts: {
        fontSize: 15,
        paddingLeft: 30,
        marginTop: 10,
        fontWeight: '500',
        color: 'black',
    },
    Contact: {
        backgroundColor: 'white',
        marginVertical: 6,
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,

    },
    inputs: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: '#fafafa',
        color: 'black',
        marginRight: 10,
        marginTop: 5,
    },

    savecontact: {
        textAlign: 'center',
        color: 'black',
        marginVertical: -35,
    },
    button: {
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: 'gray',
        height: 40,
        width: '40%',
        borderRadius: 10,
        justifyContent: 'center'
    },

    title2: {
        color: 'black',
        fontSize: 17,
    },
    storeddata: {
        backgroundColor: 'transperant',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginRight: 20,
        marginTop: 20,
        flex: 0.,

    },
    storedtext: {
        color: 'black',
        fontSize: 18,
        textAlignVertical: 'center'
    },

    main: {
        marginLeft: 10,
        marginVertical: 5,
    },

})






