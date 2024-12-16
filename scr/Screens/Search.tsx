import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


const Search = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row', marginTop: 26 }}>
                        <Image style={{ marginHorizontal: 20, }} source={require('./../images/leftarr.png')} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button3}>
                    <View style={{marginVertical:15}}>
                    <Icon name="search1" size={15} color="black"  /></View>
                    {/* <Text style={styles.buttonText3}>    Search Here</Text> */}
                    <TextInput 
                    placeholder='Search'
                    style={styles.buttonText3}
                    placeholderTextColor={'grey'}>
                        
                    </TextInput>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', marginHorizontal: 10,fontSize:15 }}>Recent</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'blue', marginHorizontal: 20,opacity:0.6 }}>Delete all</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.crossimg}>
                <Text style={styles.Textcros}> Home decoration</Text>
                <TouchableOpacity style={{ marginVertical: 5 }}>
                    <Image source={require('./../images/cross.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.crossimg}>
                <Text style={styles.Textcros}>Minimalist style</Text>
                <TouchableOpacity style={{ marginVertical: 5 }}>
                    <Image source={require('./../images/cross.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.crossimg}>
                <Text style={styles.Textcros}>House for sale at reasonable price</Text>
                <TouchableOpacity style={{ marginVertical: 5 }}>
                    <Image source={require('./../images/cross.png')} />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginVertical:40,marginHorizontal:10}}> Popular</Text>
                <Text style={{color:'black',marginRight:20,marginVertical:50,opacity:0.5}}>See all</Text>
            </View>
            <View style={{ flexDirection:"row",justifyContent:"space-between"}}>
                <Image style={{width:"70%",marginHorizontal:10,borderRadius:20}} source={require('./../images/Image.png')}/>
                <Image source={require('./../images/Image.png')}/>
            </View>
            <View style={{ flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={{color:'black',fontSize:13,marginHorizontal:20}}> Fresh space with plants</Text>
            <Text style={{color:'black',fontSize:13,marginHorizontal:80}}> Fresh space with plants</Text>

            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    button3: {
        backgroundColor: 'white',
        padding: 0,
        borderRadius: 10,
        borderWidth: 0.3,
        margin: 20,
        marginRight: 10,
        marginLeft: 0,
        marginVertical: 30,
        width: '75%',
        flexDirection: "row",
        borderColor: '#ccc',

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