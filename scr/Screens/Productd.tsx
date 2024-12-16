import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Productd = () => {
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
                    <Text style={styles.buttonText1}>Arm chair</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Bed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Table</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button4}>
                    <Text style={styles.buttonText4}>wardrobe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                    <Text style={styles.buttonText4}>Lamp</Text>
                </TouchableOpacity>
            </View>
            <Image style={styles.image} source={require('./../images/Image.png')}/>
            <View style={styles.mimag}>
                <Text style={{color:'grey',marginHorizontal:15,marginVertical:15}}> 113 products</Text>
                <Text style={{color:'black',marginHorizontal:18,marginVertical:15}}>Most popular</Text>
            </View>
            <View style={styles.mimag}>
                <Image style={styles.image1} source={require('./../images/IMG.png')}/>
                <Image style={styles.image2}   source={require('./../images/IMG.png')}/>
            </View>
            <View style={styles.mimag}>
                <Image style={styles.image3} source={require('./../images/stars.png')}/>
                <Image style={styles.image4} source={require('./../images/stars.png')}/>
            </View>
            <View style={styles.mimag}>
                <Text style={{color:'black',marginHorizontal:20,fontSize:13}}>
                Modern Armchair
                </Text>
                {/* <View style={{flexDirection:"row"}}>
                <Text style={{color:'blue',marginHorizontal:20,fontSize:13}}>
                 $145
                </Text>
                <Text style={{color:'black',marginHorizontal:-15,fontSize:12,opacity:0.5}}>
                     $185
                </Text>
                </View> */}
                <Text style={{color:'black',marginHorizontal:20,fontSize:13}}>
                Modern Armchair
                </Text>
               
            </View>
            <View style={styles.mimag}>
            <View style={{flexDirection:"row"}}>
                <Text style={{color:'blue',marginHorizontal:20,fontSize:13}}>
                 $145
                </Text>
                <Text style={{color:'black',marginHorizontal:-15,fontSize:12,opacity:0.5}}>
                     $185
                </Text>
                </View>
                <View style={{flexDirection:"row",marginRight:80}}>
                <Text style={{color:'blue',marginHorizontal:15,fontSize:13}}>
                 $145
                </Text>
                <Text style={{color:'black',marginHorizontal:-15,fontSize:12,opacity:0.5}}>
                     $185
                </Text>
                </View>

            </View>
            
            <View style={styles.mimag}>
                <Image style={styles.image1} source={require('./../images/IMG.png')}/>
                <Image style={styles.image2}   source={require('./../images/IMG.png')}/>
            </View>
            
      


    </View>
  )
}

export default Productd

const styles = StyleSheet.create({
    mimag:{
        flexDirection:'row',
        justifyContent:'space-between'

    },
    button1: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        marginRight:0,
        marginLeft: 10,
        flexBasis: 'auto',
        width: '20%',

    },
    buttonText1: {
        color: 'white',
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button2: {
        backgroundColor: '#E6E6E6',
        padding: 9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        marginRight: 5,
        marginLeft: 10,
        flexBasis: 'auto',
        width: '16%',

    },
    buttonText2: {
        color: 'grey',
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
    button4: {
        backgroundColor: '#E6E6E6',
        padding: 9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 9,
        marginRight: 5,
        marginLeft: 10,
        flexBasis: 'auto',
        width: '18%',

    },
    buttonText4: {
        color: 'grey',
        fontSize: 9,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image:{
        marginHorizontal:15,
        marginVertical:15,
        justifyContent:"center",
        width: '93%',
        padding:10,
        borderRadius:10,

    },
    image1:{
        marginHorizontal:10,
        width:"47%",
        borderRadius:20,

    },
    image2:{
        marginRight:10,
        width:"45%",
        borderRadius:20,

    },
    image3:{
        marginHorizontal:20,
        marginVertical:10,

    },
    image4:{
        marginRight:70,
        marginVertical:10,
    }
})