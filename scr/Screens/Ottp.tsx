// import { Alert, StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { TouchableOpacity } from 'react-native'
// import { Image } from 'react-native'


// const Ottp = () => {


//     const VerifyOTP = () => {
//         const [otp, setOtp] = useState(['', '', '', '']); // 4-digit OTP
//         const [timer, setTimer] = useState(57);
//         const [isResendDisabled, setIsResendDisabled] = useState(true);

//         useEffect(() => {
//             if (timer > 0) {
//                 const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
//                 return () => clearInterval(interval);
//             } else {
//                 setIsResendDisabled(false);
//             }
//         }, [timer]);

//         const handleOtpChange = (value: any, index: any) => {
//             const otpArray = [...otp];
//             otpArray[index] = value;
//             setOtp(otpArray);
//         };

//         const handleResend = () => {
//             if (!isResendDisabled) {
//                 Alert.alert('OTP Resent', 'A new OTP has been sent to your email.');
//                 setTimer(57);
//                 setIsResendDisabled(true);
//             }
//         };

//         const handleConfirm = () => {
//             if (otp.join('').length === 4) {
//                 Alert.alert('OTP Verified', `Entered OTP: ${otp.join('')}`);
//             } else {
//                 Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP.');
//             }
//         };





//         return (
//             <View style={{ flex: 1, backgroundColor: 'white' }}>
//                 <TouchableOpacity style={{ justifyContent: 'space-between', }}>
//                     <View style={{ flexDirection: 'row', marginTop: 11 }}>
//                         <Image style={{ marginHorizontal: 20, }} source={require('./../images/leftarr.png')} />
//                         <Text style={styles.buttonTextlog}>   Verify OTP</Text>
//                     </View>
//                 </TouchableOpacity>
//                 <View style={{ marginVertical: 60 }}>
//                     <Text style={styles.text3}>
//                         Enter your OTP which has been sent to your email
//                         and completely verify your account.
//                     </Text>
//                 </View>


//                 <View style={styles.otpContainer}>
//                     {otp.map((digit, index) => (
//                         <TextInput
//                             key={index}
//                             style={styles.otpInput}
//                             keyboardType="numeric"
//                             maxLength={1}
//                             value={digit}
//                             onChangeText={(value) => handleOtpChange(value, index)}
//                         />
//                     ))}
//                 </View>
//                 <Text style={styles.resendText}>
//                     Resend in {isResendDisabled ? `00:${timer < 10 ? `0${timer}` : timer}` : 'Available'}
//                 </Text>
//                 <TouchableOpacity
//                     style={[
//                         styles.resendButton,
//                         isResendDisabled && { backgroundColor: '#ccc' },
//                     ]}
//                     onPress={handleResend}
//                     disabled={isResendDisabled}
//                 >
//                     <Text style={styles.resendButtonText}>Resend OTP</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
//                     <Text style={styles.confirmButtonText}>Confirm</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }

// export default Ottp

// const styles = StyleSheet.create({
//     buttonTextlog: {
//         color: 'black',
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center',

//     },
//     text3: {
//         color: 'black',
//         alignContent: 'center',
//         marginLeft: 20,
//         marginRight: 20,
//         fontSize: 11.5,
//         textAlign: 'justify',
//         opacity: 0.5
//     },
//     })




import React, { useState, useEffect } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Image,} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Ottp = () => {
    const navigation=useNavigation<any>();
  const [otp, setOtp] = useState(['', '', '', '']); // 4-digit OTP
  const [timer, setTimer] = useState(57);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleOtpChange = (value:any, index:any) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);
  };

  const handleResend = () => {
    if (!isResendDisabled) {
      Alert.alert('OTP Resent', 'A new OTP has been sent to your email.');
      setTimer(57);
      setIsResendDisabled(true);
    }
  };

  const handleConfirm = () => {
    if (otp.join('').length === 4) {
      Alert.alert('OTP Verified', `Entered OTP: ${otp.join('')}`);
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid 4-digit OTP.');
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={{ justifyContent: 'space-between', }}>
                     <View style={{ flexDirection: 'row', marginTop: 11 }}>
                        <TouchableOpacity
                         onPress ={() => {
                            navigation.navigate('Forgetpass');}}>
                         <Image  style={{ marginHorizontal: 20, }} source={require('./../images/leftarr.png')} />
                         </TouchableOpacity>
                         <Text style={styles.buttonTextlog}>   Verify OTP</Text>
                     </View>
                </TouchableOpacity>
      <Text style={styles.subtitle}>
        Enter your OTP which has been sent to your email and completely verify your account.
      </Text>
     
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleOtpChange(value, index)}
          />
        ))}
      </View>
      <Text style={{color:'black',textAlign:'center',opacity:0.5}}> The Code has been sent in your phone</Text>
      <Text style={styles.resendText}>
        Resend in {isResendDisabled ? `00:${timer < 10 ? `0${timer}` : timer}` : 'Available'}
      </Text>
      <TouchableOpacity
        style={[
          styles.resendButton,
          isResendDisabled && { backgroundColor: '#ccc' },
        ]}
        onPress={handleResend}
        disabled={isResendDisabled}
      >
        <Text style={styles.resendButtonText}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmButton} 
      
      onPress ={() => {
        navigation.navigate('Livingroom');}}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 10,
  },
  buttonTextlog: {
             color: 'black',
             fontSize: 24,
             fontWeight: 'bold',
             textAlign: 'center',
    
        },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginVertical:40,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
  },
  resendText: {
    fontSize: 16,
    color: 'blue',
    marginVertical:20,
    marginBottom: 10,
    textAlign:'center'
  },
  resendButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center'
  },
  confirmButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,

  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '400',
    textAlign:'center'
  },
});

export default Ottp;
