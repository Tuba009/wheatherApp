import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/AntDesign';

const Search = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>
                    <Icon1 style={{ marginTop: 23, marginLeft: 5 }} name="arrowleft" size={25} color="black" />
                </TouchableOpacity>
                <Text style={{ color: 'black', fontWeight: '800', fontSize: 20, marginLeft: 20, marginTop: 20 }}>Search</Text>

            </View>
            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={styles.button3}>
                    <TextInput
                        placeholder='Search'
                        style={styles.buttonText3}
                        placeholderTextColor={'grey'}>
                    </TextInput>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ marginTop: 35 }}>
                        <Icon style={{ marginLeft: -35, }} name="search1" size={15} color="black" /></View>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontSize: 15, marginTop: 10, marginLeft: 20 }}>Recent</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'blue', marginHorizontal: 20, opacity: 0.6, marginTop: 10 }}>Delete all</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    button3: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        width: '90%',
        flexDirection: "row",
        borderColor: '#ccc',
        marginTop: 20,
        marginLeft: 20,

    },
    buttonText3: {
        color: 'black',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'left',
    },
    Textcros: {
        color: 'black',
        marginHorizontal: 7,
        marginVertical: 1

    },

    crossimg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 40,
        marginVertical: 6,

    }
})