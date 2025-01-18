import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'


export default function ShoppingStore() {
    const [proData, setProData] = useState<any>()
    const [price, setprice] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        getPro()
    }, [])






    const getPro = async () => {
        try {
            const responce = await fetch('https://fakestoreapi.com/products')
            // console.log('jdata', JSON.stringify(responce))
            const data = await responce.json()
            // console.log('data',data)
            if (responce.ok) {
                setProData(data);
                setErrorMessage('')
              } else {
                setErrorMessage(data.message)
              }
            setIsLoading(false);
        } catch (err) {
           console.log('error fetch data',err)
            setIsLoading(false);
        }
    }
    const renderItem = ({ item,index }: any) => {
        return <View style={{marginTop:60}}>


            <View>
                <TouchableOpacity
                onPress={() => navigation.navigate('AddCart', { item: item,index:index })}>
                    <Image  resizeMethod='resize' style={{ height: 200, width: 200, marginLeft: 25, borderRadius: 20, marginTop: 10 }} source={{uri:item.image}} />
                    {/* <Image style={{ height: 25, width: 25, marginTop: -200, marginLeft: 140, borderRadius: 15 }} source={require('./../images/heart.png')} /> */}
                </TouchableOpacity>
            </View>
            <View style={styles.price1}>
                
                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: '700', height: 30 }}>{item.title}</Text>
                    <Text style={{ color: '#757575', fontSize: 11, fontWeight: '700' }}>{item.price}</Text>
                </View>


        </View>
    }


    const navigation = useNavigation<any>();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff1f6', }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-evenly" }}>
                <Image   style={{ height: 28, width: 28, marginTop: 54, marginLeft: 19, }} source={require('./../images/Apps.png')} />

                <Image style={{ height: 40, width: 40, marginLeft: 210, marginTop: 45, borderRadius: 25 }} source={require('./../images/girlco.png')} />
            </View>
            <View>
                <Text style={styles.Textstyle}>Match your style</Text>

            </View>
            <View style={styles.Tabs}>
                <View style={styles.tab1}>
                    <Text style={styles.trending}>Trending Now</Text>
                </View>

                <View style={styles.tab2}>
                    <Text style={styles.All}>All</Text>
                </View>

                <View style={styles.tab3}>
                    <Text style={styles.New}> New</Text>
                </View>
            </View>


            <FlatList
                data={proData}
                renderItem={renderItem}
                horizontal={true}
                


            />
            {/* <View style={{ flexDirection: 'row' }}>
                <View>
                    <TouchableOpacity>
                        <Image style={{ height: 207, width: 147, marginLeft: 25, borderRadius: 20, marginTop: 10 }} source={require('./../images/girl1.jpg')} />
                        <Image style={{ height: 25, width: 25, marginTop: -200, marginLeft: 140, borderRadius: 15 }} source={require('./../images/heart.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => { navigation.navigate('AddCart') }}>
                        <Image style={{ height: 207, width: 147, marginLeft: 20, borderRadius: 20, marginTop: 10 }} source={require('./../images/girl2.jpg')} />
                        <Image style={{ height: 25, width: 25, marginTop: -200, marginLeft: 135, borderRadius: 15 }} source={require('./../images/heart.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 180, height: 70, }}>

                <View style={styles.price1}>
                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: '700', height: 25 }}> Polkadot Red Dress</Text>
                    <Text style={{ color: '#757575', fontSize: 11, fontWeight: '700' }}> Rs.  1,499.00</Text>
                </View>

                <View style={styles.price2}>
                    <Text style={{ color: '#000000', fontSize: 11, fontWeight: '700', height: 25 }}> Striped Pink Dress</Text>
                    <Text style={{ color: '#757575', fontSize: 11, fontWeight: '700', }}> Rs.  1,299.00</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={{ height: 207, width: 147, marginLeft: 25, borderRadius: 20, marginTop: 10 }} source={require('./../images/girl3.jpg')} />
                    <Image style={{ height: 25, width: 25, marginTop: -200, marginLeft: 140, borderRadius: 15 }} source={require('./../images/heart.png')} />
                </View>
                <View>
                    <Image style={{ height: 207, width: 147, marginLeft: 20, borderRadius: 20, marginTop: 10 }} source={require('./../images/girl4.jpg')} />
                    <Image style={{ height: 25, width: 25, marginTop: -200, marginLeft: 135, borderRadius: 15 }} source={require('./../images/heart.png')} />
                </View>
            </View>

 */}

        </View>
    )
}

const styles = StyleSheet.create({
    Textstyle: {
        fontSize: 25,
        color: 'black',
        width: 500,
        height: 55,
        marginHorizontal: 20,
        marginVertical: 35,
    },
    Tabs: {
        flexDirection: 'row',
        height: 40,
        width: 330,
        margin: 15,
        marginTop: -20,
        justifyContent: 'space-around',
    },
    tab1: {
        backgroundColor: '#F38181',
        borderRadius: 17,
        width: 150,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trending: {
        color: 'white',
    },
    tab2: {
        backgroundColor: '#E9E6E6',
        borderRadius: 17,
        width: 75,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    All: {
        color: '#8A8A8A',
    },
    tab3: {
        backgroundColor: '#E9E6E6',
        borderRadius: 17,
        width: 80,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    New: {
        color: '#8A8A8A',
    },
    price1: {
        height: 70,
        width: 177,
        marginLeft: 30,
    },
    price2: {
        height: 70,
        width: 200,
    },
})

