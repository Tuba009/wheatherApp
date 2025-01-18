import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FireStore = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState([])
    // const savedata = () => {
    //         const dataArray = [...data, { Name: name, Age:age}]
    //         console.log('Data', fire)
    //         Storetofirestore(dataArray)
    //         setData(dataArray as any)
    //         setName('')
    //         setAge('')
       
    // // }
    

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const usersCollection = await firestore().collection('Users').where('age', '>=', 18).get();
            const users = usersCollection.docs.map(doc => doc.data());
            console.log('Users:', users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const Storetofirestore = async () => {
        try {
            await firestore().collection('Users').add({
                name:name,
                age: Number(age), // Ensure age is stored as a number
            });
            console.log('User added!');
            setName('');
            setAge('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const renderList = ({ item}: any) => {
            return (
                <View>
                    <View>
                        <Text>Nmae:{item.name}</Text>
                        <Text>Age:{item.age}</Text>
                    </View>
                </View>
            )
        }

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
            <View style={styles.mainnametop}>
                <Text style={styles.title2}>Name</Text>
                <TextInput
                    style={styles.inputs}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter Name"
                    placeholderTextColor={'grey'}
                />
            </View>

            <View style={styles.main}>
                <Text style={styles.title2}>Age</Text>
                <TextInput
                    style={styles.inputs}
                    value={age}
                    onChangeText={(text) => setAge(text)}
                    placeholder="Age"
                    placeholderTextColor={'grey'}
                    keyboardType="number-pad"
                />
            </View>

            <TouchableOpacity onPress={Storetofirestore}>
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 20, fontWeight: '800', backgroundColor: 'white', borderWidth: 1, borderColor: 'gray', width: 50, marginLeft: 130, borderRadius: 10 }}>Save</Text>
            </TouchableOpacity>
            <FlatList
                    data={data}
                    renderItem={renderList}
                />
        </View>
    );
};

export default FireStore;

const styles = StyleSheet.create({
    title2: {
        color: 'black',
        fontSize: 17,
        marginBottom: 5,
    },
    inputs: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 10,
        color: 'black',
        marginBottom: 10,
    },
    main: {
        marginTop: -30
    },
    mainnametop: {

        marginVertical: 50
    },
});
