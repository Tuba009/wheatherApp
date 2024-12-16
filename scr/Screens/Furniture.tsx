import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const Furniture = () => {
    const navigation=useNavigation<any>();
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
     <TouchableOpacity onPress ={() => {
         
         navigation.navigate('Firstpage');}}>
 
       
        <View style={{alignItems:"center",marginTop:300}} >
            <Image  source={require('./../images/chair.png')}/>
        </View>
      </TouchableOpacity>
    </View>
    
  )
}

export default Furniture

const styles = StyleSheet.create({})



// navigation.navigate('Firstpage' as never)