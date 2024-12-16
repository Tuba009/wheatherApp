import { View, Text, TouchableOpacity, Image, StyleSheet, Button, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const Firstpage = () => {
    const navigation=useNavigation<any>();
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <TouchableOpacity>
        <View>
            <Image style={styles.rectangle}  source={require('./../images/Rectangle.png')}/>
        </View>
      </TouchableOpacity>
      <View >
        <Text style={styles.text}>Find Your Dream House: Browse Our Listings</Text>
        <Text style={styles.text2}>Now</Text>
      </View>
      <View>
        <Text style={styles.text3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        </Text>
      </View>
      <View style={styles.started}>
    <TouchableOpacity 
    onPress ={() => {
        navigation.navigate('Secondpage');}}
    style={styles.button}>
      <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
                   
      </View>
    </View>
  )
}

export default Firstpage
const styles = StyleSheet.create({
    rectangle:{
             marginHorizontal:20,
             marginVertical:30,
             marginRight:30,
             width:"90%",
             borderRadius:30,
             
          
                  

    },
    text:{
          color:'black',
          alignContent:'center',
          marginLeft:20,
          marginRight:20,
          fontSize:25,
          fontWeight:'bold',
          textAlign:'center'
    },
    text2:{
        color:'black',
        alignContent:'center',
        marginLeft:130,
        fontSize:25,
        fontWeight:'bold',
        
  },
  text3:{
    color:'black',
    alignContent:'center',
    marginLeft:30,
    marginRight:30,
    fontSize:12,
    textAlign:'center',
    opacity:0.5
  },
  started:{
    paddingRight:40,
    marginHorizontal:30,
    marginVertical:50,

  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    marginRight:0,
    marginLeft:0,
    flexBasis:'auto',
    width: '120%',

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

})