import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';

const Home = () => {

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
                    navigation.navigate('Login' as never)
                    console.log('atydfuysa')
                }
                else {
                    navigation.navigate('Home2' as never)
                    // console.log('stdfyusf')
                }
            }
        }, 1000);
    }, [initializing, user]);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [initializing]);



    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1,backgroundColor:'white'}}>
            <Image
                style={styles.image}
                source={require('./../../images/wthread.png')}
            />
            <TouchableOpacity style={{marginTop:400,marginLeft:140}}
                onPress={() => {
                    navigation.navigate('Login');
                }}
            >
                <Text style={styles.buttonText}>ᨖ Meta</Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        marginTop: 150,
        marginLeft: 140,
        width: '20%',
        height: "10%"

    },
    buttonText: {
        color: 'grey',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic",

    },
})
