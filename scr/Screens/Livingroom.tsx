import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from '@react-native-firebase/firestore';



const Livingroom = () => {
    const [users, setUsers] = useState('');
    const [search, setSearch] = useState('');
    useEffect(() => {
        gethUsers();
    }, []);

    const gethUsers = async () => {
        try {
            const usersCollection = await firestore().collection('Users').get();

        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    firestore()
        .collection('Users')
        .add({
            name: 'Ada Lovelace',
            age: 30,
        })
        .then(() => {
            console.log('User added!');
        })

        
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button3}>
                    <Icon style={{ marginTop: 15, marginLeft: 10 }} name="search1" size={15} color="black" />
                    <TextInput style={{color:'black'}}
                        value={users}
                        onChangeText={setUsers}
                        placeholder="Search here"
                        placeholderTextColor="grey"
                        
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={{ marginVertical: 35, marginHorizontal: 22 }}>
                    <Icon name="shoppingcart" size={22} color="black" />
                </View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.buttonText1}>Living Room</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Dinning Room</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Bed Room</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Image style={styles.image1} source={require('./../images/Card.png')} />
                    <Text style={styles.text1}>Fresh space with plants</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Image style={styles.image2} source={require('./../images/Card.png')} />
                    <Text style={styles.text2}>Fresh space with plants</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Image style={styles.image3} source={require('./../images/Card.png')} />
                    <Text style={styles.text3}>Fresh space with plants</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'column' }}>
                        <Image style={styles.image4} source={require('./../images/Card.png')} />
                        <Text style={styles.text4}>Fresh space with plants</Text>
                        <Image style={styles.image4} source={require('./../images/Card.png')} />
                    </View>
                </View>


            </View>
        </View>
    )
}

export default Livingroom

const styles = StyleSheet.create({
    button1: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        marginRight: 5,
        marginLeft: 10,
        flexBasis: 'auto',
        width: '25%',

    },
    buttonText1: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button2: {
        backgroundColor: '#E6E6E6',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        marginRight: 5,
        marginLeft: 10,
        flexBasis: 'auto',
        width: '25%',

    },
    buttonText2: {
        color: 'black',
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button3: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.5,
        marginRight: 5,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
        width: '80%',
        flexDirection: "row"

    },
    buttonText3: {
        color: 'black',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'left',
    },
    image1: {
        width: "100%",
        height: 230,

    },
    text1: {
        color: 'black',
        fontFamily: "Poppins-Regular",
        marginHorizontal: 17
    },
    image2: {
        width: "90%",
        height: 170,
        marginVertical: 10,

    },
    text2: {
        color: 'black',
        fontFamily: "Poppins-Regular",
        marginHorizontal: 12,
        fontSize: 11

    },
    image3: {
        width: "100%",
        height: 230,
        marginVertical: -15,
    },
    text3: {
        color: 'black',
        fontFamily: "Poppins-Regular",
        marginHorizontal: 17,
        marginVertical: 20
    },
    image4: {
        width: "88%",
        height: 190,
        marginVertical: -55,
    },
    text4: {
        color: 'black',
        fontFamily: "Poppins-Regular",
        marginHorizontal: 12,
        fontSize: 11,
        marginVertical: 57
    },
    main: {
        marginLeft: 10,
        marginVertical: 10,
    },
    title2: {
        color: 'black',
        fontSize: 17,
    },

})