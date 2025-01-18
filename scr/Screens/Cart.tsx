import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem } from './Store.tsx/Slices.tsx/CartSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Cart = ({ route }: any) => {

    const dispatch = useDispatch()
    const cartItems = useSelector((state: any) => state.cart?.items)
    const navigation = useNavigation<any>()

    const total = cartItems?.reduce((sum: any, item: any) =>
        sum + (item?.price * item?.quantity || 1)
        , 0)


    // const [product, setProduct] = useState([]);
    // // console.log('total',cartItems)
    // const { item, index } = route.params ||{}
    // console.log('route', route.params)
    // // console.log('item?.image:', item?.image);
    // //    console.log('itemmmmmm', item.image)
    // //    console.log('inedx:,', index)


    return (
        <View style={{ flex: 1, backgroundColor: '#fff1f6', }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <TouchableOpacity onPress={() => {

                    navigation.navigate('ShoppingStore');
                }}>
                    <Image style={{ height: 35, width: 35, marginTop: 30, marginLeft: 19, }} source={require('./../images/leftarr.png')} />
                </TouchableOpacity>
                <Text style={{ color: "#000000", fontSize: 24, fontWeight: "700", fontFamily: 'inter', marginTop: 30, marginLeft: 25 }}>    My Cart</Text>
                <Image style={{ height: 40, width: 40, marginLeft: 80, marginTop: 30, borderRadius: 25 }} source={require('./../images/girlco.png')} />
            </View>
            <View style={{ flex: 0.75, alignSelf: 'center' }}>
                <ScrollView>
                    {cartItems?.map((item: any) => (
                        <View key={item?.id} >
                            <Image source={{ uri: item?.image }} />
                            <View >
                                <Text >{item?.title}</Text>
                                <Text>
                                    ${item?.price} x {item.quantity} = ${(item.price * (item.quantity || 1)).toFixed(2)}
                                </Text>
                                <Button title="Remove" onPress={() => dispatch(removeItem(item))} />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <TouchableOpacity onPress={() => {

                    navigation.navigate('ShoppingStore');
                }}>
                    <Image style={{ height: 35, width: 35, marginTop: 30, marginLeft: 19, }} source={require('./../images/leftarr.png')} />
                </TouchableOpacity>
                <Text style={{ color: "#000000", fontSize: 24, fontWeight: "700", fontFamily: 'inter', marginTop: 30, marginLeft: 25 }}>    My Cart</Text>
                <Image style={{ height: 40, width: 40, marginLeft: 80, marginTop: 30, borderRadius: 25 }} source={require('./../images/girlco.png')} />
            </View> */}

            {/* 
            <View >
                <Image style={{ height: 170, width: 120, marginLeft: 10, borderRadius: 20, marginTop: 20 }} 
                source={{ uri: item?.image }} 
                onError={(e) => console.log('Cannot load Image', e.nativeEvent.error)}/>


            </View> */}
            {/* <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#000000', fontSize: 15, fontWeight: '600', height: 80, marginTop: -160, marginLeft: 140, width: 190 }}>
                    {item.title}
                </Text>
                <TouchableOpacity>
                    <Icon2 style={{ height: 100, width: 100, marginTop: -160 }} name="delete-outline" size={20} color="#C85959"
                     onPress={() => deletePro(index)}/>
                </TouchableOpacity>
            </View> */}
            {/* <Text style={{ color: "#757575", marginTop: -100, fontWeight: '600', marginLeft: 140, fontSize: 16 }}>
            {item.price}</Text> */}
            {/* <View style={{ flexDirection: "row" }}>
                <Image style={{ height: 40, width: 40, marginLeft: 140, marginTop: 20, borderRadius: 25 }} source={require('./../images/dgreen.png')} />
                <Text style={{ color: "#000000", marginTop: 30, marginLeft: 30, fontFamily: "Inter", fontWeight: "700", fontSize: 16 }}>S</Text>

            </View> */}
            {/* <View >
                <Image style={{ height: 190, width: 120, marginLeft: 10, borderRadius: 20, marginTop: 70 }} source={require('./../images/girl2.jpg')} />
            </View> */}
            {/* <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#000000', fontSize: 15, fontWeight: '600', height: 30, marginTop: -180, marginLeft: 140, width: 190 }}>
                    Striped Pink Dress
                </Text>
                <TouchableOpacity>
                    <Icon2 style={{ height: 100, width: 100, marginTop: -175 }} name="delete-outline" size={20} color="#C85959"
                    />
                </TouchableOpacity>
            </View> */}
            {/* <Text style={{ color: "#757575", marginTop: -150, fontWeight: '600', marginLeft: 140, fontSize: 16 }}>
                Rs.  1,299.00</Text>
            <View style={{ flexDirection: "row" }}>
                <Image style={{ height: 40, width: 40, marginLeft: 140, marginTop: 20, borderRadius: 25 }} source={require('./../images/ppink.png')} />
                <Text style={{ color: "#000000", marginTop: 30, marginLeft: 30, fontFamily: "Inter", fontWeight: "700", fontSize: 16 }}>M</Text>
            </View> */}

            {/* <FlatList
               data={item}
              renderItem={renderContacts}
              // renderItem={Emptylistshower}
              /> */}
            <View style={{}}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ color: "#757575", fontSize: 15, fontWeight: '500', height: 30, marginTop: 430, marginLeft: 18 }}> Total:</Text>
                    <Text style={{ color: "#757575", fontSize: 15, fontWeight: '500', marginTop: 325, marginRight: 10 }}>{total?.toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ color: "#757575", fontSize: 15, fontWeight: '500', height: 30, marginTop: 10, marginLeft: 22 }}>Shipping:</Text>
                    <Text style={{ color: "#757575", fontSize: 15, fontWeight: '500', marginTop: 10, marginRight: 10 }}>Rs 0.00</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={{ color: "#000000", fontSize: 15, fontWeight: '500', height: 30, marginTop: 10, marginLeft: 22 }}>Grand Total:</Text>
                    <Text style={{ color: "#000000", fontSize: 15, fontWeight: '500', marginTop: 10, marginRight: 10 }}>{total?.toFixed(2)}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {

                        navigation.navigate('ShoppingStore');
                    }}
                    style={styles.button} >
                    <Text style={styles.savecontact} >Checkout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#C85959',
        height: 60,
        width: 370,
        marginVertical: 0,
        justifyContent: 'center'
    },
    savecontact: {
        textAlign: 'center',
        color: 'white',
        marginVertical: -35,
        fontWeight: "800",
        fontSize: 18
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 45,
    },
})