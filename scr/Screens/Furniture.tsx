import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Furniture = () => {
  const [initializing,setInitializing] = useState<any>(true);
  const [user,setUser]=useState();
    function onAuthStateChanged(user:any){
      setUser(user);
      if (initializing) setInitializing(false);
    }
 useEffect(() => {
        setTimeout(()=>{
          if (initializing){
            if (!user) {
              navigation.navigate('Signup'as never)
            }
            else(navigation.navigate('Livingroom'as never))
          }
        },1000);
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
       return subscriber;
    }, [initializing,user]);
    useEffect(() => {
              const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
              return subscriber; 
            }, []);

   

        const navigation=useNavigation<any>();

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
     <TouchableOpacity>
 
       
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