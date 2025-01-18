import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem,removeItem } from './Store.tsx/Slices.tsx/CartSlice';
import { useNavigation } from '@react-navigation/native'
import  Icon1  from 'react-native-vector-icons/Ionicons';
import  Icon2  from 'react-native-vector-icons/AntDesign';

const AddCart = ({ route }: any) => {

    const dispatch = useDispatch();

    const { item, index } = route.params || {}
    console.log('route', route.params)

    const addToCart = () => {
        dispatch(addItem(item));
    };

    //    console.log('itemmmmmm', item.image)
    //    console.log('inedx:,', index)

    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff1f6', }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <Image style={{ height: 28, width: 28, marginTop: 30, marginLeft: 19, }} source={require('./../images/Apps.png')} />
                <Image style={{ height: 40, width: 40, marginLeft: 210, marginTop: 30, borderRadius: 25 }} source={require('./../images/girlco.png')} />
            </View>
            <View style={{
                height: '39%',
            }}>
                <Image resizeMethod='resize'
                    style={{ height: 300, width: 250, marginLeft: 20, marginTop: 20 }}
                    source={{ uri: item?.image }}
                    onError={(e) => console.log('Cannot load Image', e.nativeEvent.error)}
                />
            </View>
            <View >
                <Text style={{ color: '#000000', fontSize: 16, fontWeight: '600', height: 50, marginTop: 60, marginLeft: 20 }}>
                    {item?.title}
                </Text>
                <Text style={{ color: "#757575", marginTop: 0, fontWeight: '700', marginLeft: 20, fontSize: 16 }}>
                    {item?.price}</Text>
            </View>
            

            {/* <View>
                <Image style={{ height: 300, width: 390, marginLeft: -21, marginTop: 10, }} source={require('./../images/girl2.jpg')} />
                <Image style={{ height: 25, width: 25, marginTop: -280, marginLeft: 300, borderRadius: 15 }} source={require('./../images/heart.png')} />
            </View> */}

            {/* <Text  style={{color:"#000000", marginHorizontal:20,marginVertical:10,fontSize:16,fontWeight:"600"}}> Size</Text>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                <Text style={{color:'black',marginHorizontal:-60,fontSize:16,fontWeight:"600"}}>XS</Text>
                <Text style={{color:'black',fontSize:16,fontWeight:"600",marginLeft:-10}} >   S</Text>
                <Text style={{color:'#F03350',fontSize:16,fontWeight:"600",marginLeft:-40}}>M</Text>
                <Text style={{color:'black',fontSize:16,fontWeight:"600",marginLeft:-60}}>   L</Text>
            </View>
            <Text style={{color:"#000000",fontWeight:"600",fontSize:16,marginHorizontal:20,marginVertical:10}}>Color</Text>
           <View style={{flexDirection:'row'}}>
            <Image style={{marginLeft:30}} source={require('./../images/pink.png')}/>
            <Image style={{marginLeft:20}}  source={require('./../images/blue.png')}/>
            <Image style={{marginLeft:20}}  source={require('./../images/brown.png')}/>
           </View> */}
           {/* <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>{ 
                 () => dispatch(removeItem(item)) }} >
            <Icon2 style={{color:"black",marginLeft:18,marginTop:13}} name="minuscircle" size={25} />
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>{ 
                 () => dispatch(addItem(item)) }} >
            <Icon1 style={{color:"black",marginRight:18,marginTop:15}} name="add-circle" size={30}/>
                 </TouchableOpacity>
            </View> */}
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        () => dispatch(addItem(item))
                            // navigation.navigate('Cart',{ item: item,index:index })
                    }}
                    style={styles.button} >
                    <Text style={styles.savecontact} >Add to Cart</Text>
                </TouchableOpacity>
            </View>
           

        </View>
    )
}

export default AddCart

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#C85959",
        height: 65,
        width: 375,
        marginVertical: 145,
        justifyContent: 'center'
    },
    savecontact: {
        textAlign: 'center',
        color: 'white',

        fontWeight: "800",
        fontSize: 18
    },
})











