import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    // Navigate to Slider1 after 1 minute ( milliseconds)
    const timer = setTimeout(() => {
      navigation.navigate('Slider1');
    }, 2000);

    // Cleanup the timer 
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity onPress={() => { navigation.navigate('Slider1') }}>
        <Image
          style={{ justifyContent: 'center', marginTop: 250, marginLeft: 120 }}
          source={require('./../../images/bloodbank.png')}
        />
      </TouchableOpacity>

      <Text style={{ color: '#FF0000', fontSize: 20, marginLeft: 110, fontWeight: '900' }}>
        BLOOD BANK
      </Text>
      <Text style={{ color: 'red', fontSize: 20, marginLeft: 160, fontWeight: '900' }}>APP</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})
