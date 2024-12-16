import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';



const Livingroom = () => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.button3}>
            <Icon name="search1" size={15} color="black" />
            <Text style={styles.buttonText3}>    Search Here</Text>
            </TouchableOpacity>
            <View style={{marginVertical:35,marginHorizontal:22}}>
            <Icon name="shoppingcart" size={22} color="black"  /> 
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
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
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column'}}>
                <Image style={styles.image1} source={require('./../images/Card.png')}/>
                <Text style={styles.text1}>Fresh space with plants</Text>
                </View>
                <View style={{flexDirection:'column'}}>
                <Image style={styles.image2} source={require('./../images/Card.png')}/>
                <Text style={styles.text2}>Fresh space with plants</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column'}}>
                <Image style={styles.image3} source={require('./../images/Card.png')}/>
                <Text style={styles.text3}>Fresh space with plants</Text>
                </View>
                <View>
                <View style={{flexDirection:'column'}}>
                <Image style={styles.image4} source={require('./../images/Card.png')}/>
                <Text style={styles.text4}>Fresh space with plants</Text>
                <Image style={styles.image4} source={require('./../images/Card.png')}/>
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
        marginRight:5,
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
        padding: 5,
        borderRadius: 10,
        borderWidth:0.5,
        margin: 9,
        marginRight: 5,
        marginLeft: 10,
        marginVertical:30,
        width: '80%',
        flexDirection:"row"

    },
    buttonText3: {
        color: 'black',
        fontSize: 10,
        fontWeight: '400',
        textAlign: 'left',
    },
    image1:{
        width:"100%",
        height:230,

    },
    text1:{
        color:'black',
        fontFamily:"Poppins-Regular",
        marginHorizontal:17
    },
    image2:{
        width:"90%",
        height:170,
        marginVertical:10,

    },
    text2:{
        color:'black',
        fontFamily:"Poppins-Regular",
        marginHorizontal:12,
        fontSize:11

    },
    image3:{
        width:"100%",
        height:230,
        marginVertical:-15,
    },
    text3:{
        color:'black',
        fontFamily:"Poppins-Regular",
        marginHorizontal:17,
        marginVertical:20
    },
    image4:{
        width:"88%",
        height:190,
        marginVertical:-55, 
    },
    text4:{
        color:'black',
        fontFamily:"Poppins-Regular",
        marginHorizontal:12,
        fontSize:11,
        marginVertical:57
    }
})