import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Slider2 = () => {
  const navigation = useNavigation<any>();
  const [initializing, setInitializing] = useState<any>(true);
      const [user, setUser] = useState();

      function onAuthStateChanged(user: any) {
        setUser(user);
        // console.log(user)
        if (initializing) setInitializing(false);
    }
  useEffect(() => {
        setTimeout(() => {
            if (!initializing) {
                if (!user) {
                    navigation.navigate('BloodLogin' as never)
                    console.log('atydfuysa')
                }
                else {
                    navigation.navigate('Home' as never)
                    
                }
            }
        }, 1000);
    }, [initializing, user]);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [initializing]);

  return (
    <View style={{ flex: 1, backgroundColor: '#820000' }}>
      <TouchableOpacity onPress={() => { navigation.navigate('BloodOTP') }}>
        <Image 
          style={{ marginLeft: 60, marginTop: 130 }}
          source={require('./../../images/handtohand.png')} 
        />
      </TouchableOpacity>

      <View>
        <Text style={{ color: 'white', marginLeft: 70, fontWeight: "bold", fontSize: 20 }}>
          Your blood type should
        </Text>
        <Text style={{ color: 'white', marginLeft: 65, fontWeight: "bold", fontSize: 20 }}>
          be compatible with the
        </Text>
        <Text style={{ color: 'white', marginLeft: 110, fontWeight: "bold", fontSize: 20 }}>
          receiver’s type.
        </Text>
      </View>
    </View>
  )
}

export default Slider2

const styles = StyleSheet.create({})
