// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import React from 'react'

// const WheatherApp = () => {
//   const navigation =useNavigation();
//   return (
//     <View style={{flex:1,backgroundColor:'#47BFDF'}}>
//       <View style={styles.imgbel}>
//         <Image source={require('./../images/suraba.png')}/>
//         <Image source={require('./../images/bell.png')}/>

//       </View>
//       <View style={{flexDirection:'row',justifyContent:'space-between'}}>

//       <Image  source={require('./../images/liness.png')}/>
//       <Image source={require('./../images/liness.png')}/>
//       </View>
//       <View style={{marginVertical:-250,marginHorizontal:70 }}>
//         <TouchableOpacity >
//         <Image source={require('./../images/sun.png')}/>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.card}>
//       <Text style={styles.date}>Today, 12 September</Text>
//       <Text style={styles.temperature}>34°</Text>
//       <Text style={styles.condition}>Sunny</Text>
//       <Text style={styles.infoText}>
//       <Image source={require('./../images/hum.png')}/>
//              Wind      |  15 km/h</Text>
//       <Text style={styles.infoText}>
//       <Image source={require('./../images/wind.png')}/>  Hum    |       26%</Text>
//     </View>
//       <View >

//      {/* <Image style={{width:"90%",marginBottom:-10,marginHorizontal:20,borderRadius:30,marginVertical:230}} 
//       source={require('./../images/box.png')}/>  */}
//       {/* <TouchableOpacity style={{marginHorizontal:80,marginVertical:10}}>
//         <Image source={require('./../images/forecast.png')}/>
//       </TouchableOpacity> */}
//       <TouchableOpacity 
//       style={styles.button}
//        onPress={()=>navigation.navigate('Wheasecond' as never)}>
//         <Text style={styles.buttonText}>Forecast Report</Text>
//       </TouchableOpacity>
//       </View>

//     </View>
//   )
// }

// export default WheatherApp

// const styles = StyleSheet.create({
//     imgbel:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         marginVertical:40,
//         marginRight:18,
//         marginHorizontal:20

//     },
//     button: {
//         backgroundColor: 'white',
//         padding: 10,
//         width:120,
//         marginHorizontal:120,
//         marginVertical:-250,
//         borderRadius: 10,

//       },
//       buttonText: {
//         color: 'black',
//         fontSize: 12,
//         fontWeight: '600',
//       },
//       card: {
//         width: 320,
//         height:270,
//         padding: 20,
//         borderRadius: 20,
//         marginVertical:280,
//         marginHorizontal:20,
//         shadowColor: "white",
//         shadowOffset: { width: 0, height: 20 },
//         shadowOpacity: 0.1,
//         shadowRadius: 0,
//         elevation: 0.,
//         alignItems: "center",
//         backgroundColor:'#88c4f4'
//       },
//       date: {
//         fontSize: 14,
//         color: "white",
//         marginBottom: 10,
//         textAlign:'center',

//       },
//       temperature: {
//         fontSize: 48,
//         fontWeight: "bold",
//         color: "white",
//       },
//       condition: {
//         fontSize: 18,
//         color: "white",
//         marginBottom: 15,
//       },
//       infoRow: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width: "100%",
//         marginTop: 10,
//       },
//       infoText: {
//         fontSize: 14,
//         color: "white",
//         marginHorizontal:10,
//       },
// }



import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Location from 'react-native-vector-icons/EvilIcons'
import Notification from 'react-native-vector-icons/Ionicons'
import Down from 'react-native-vector-icons/AntDesign'
import Wind from 'react-native-vector-icons/FontAwesome5'
import Drop from 'react-native-vector-icons/Feather'
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/AntDesign'


const API_KEY = 'b30ddf0ab9040e5d098412b86aec2dab'

const WheatherApp = () => {
  const navigation = useNavigation<any>()
  const [weatherData, setWeatherData] = useState<any>([])
  const [isLoading, setIsLoading] = useState(true)
  const [city, setCity] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [position, setPosition] = useState({})
  //console.log('Passed', city)

  useEffect(() => {
    getCurrentLocation()
  }, [])


  const getCurrentLocation = () => {
    console.log('Test')
    Geolocation.getCurrentPosition(
      (pos) => {
        console.log('Your Coords', pos);
        getData(pos)
        setPosition(pos)
      },
      (error) => console.log('GetCurrentPosition Error', JSON.stringify(error))
    );
  }

  const getData = async (pos: any) => {
    setIsLoading(true)

    const URL = city ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` : 
    `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}&units=metric`

    try {
      const responce = await fetch(URL)
      const data = await responce.json()
      // console.log('Responce ', JSON.stringify(data))
      if (responce.ok) {
        setWeatherData(data)
        setErrorMessage('')
      } else {
        setErrorMessage(data.message)
      }
      setIsLoading(false)
    } catch (error: any) {
      // console.log('Error', error)
      Alert.alert('Error', error)
      setErrorMessage(error)
    }
  }

  const date= new Date()
const months =[
    "January","February","March","April","May",
    "June","July","August","September","October","November","December"

]


console.log('pos', position)




  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#47BFDF' }}>
      <View style={{ backgroundColor: '#47BFDF', flexDirection: 'row', }}>
        <TouchableOpacity style={styles.button3}
        >

          <TextInput style={{ color: 'black', backgroundColor: 'white', marginHorizontal: 20 }}
            placeholder='Enter City'
            value={city}
            onChangeText={(Text) => setCity(Text)}
          />
          <TouchableOpacity style={{ marginVertical: 13, marginLeft: 150 }}
          disabled={city === '' ? true : false}
            onPress={getData} >
            <Icon name="search1" size={20} color="black"
               />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      {
        isLoading ? <ActivityIndicator size='large' color='blue' /> :
          <>
            {errorMessage ?
              <View>
                <Text style={{ color: 'black', textAlign: "center", fontSize: 15, fontWeight: 'bold' }}>{errorMessage}</Text>
              </View> :
              <View style={styles.body}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 15, }}>
                  <View style={{ flexDirection: 'row', }}>
                    <Location
                      name='location' color='#fff' size={24} />
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16, marginHorizontal: 8 }}>{weatherData?.name}</Text>
                    <Down
                      style={{ marginTop: 5 }}
                      name='down' color='#fff' size={13}
                    />
                  </View>
                  <Notification
                    name='notifications' color='#fff' size={22}
                  />
                </View>
                
                <View style={{flex:0.5,marginHorizontal:70}}>
                  <Image  width={200} height={200} source={{ uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png` }} />
                  
                  

                </View>
                
               
                <View style={styles.container}>
                  <Text style={{ color: '#fff', marginVertical: 10, fontSize: 18, fontWeight: '500' }}>Today,{date.getDate()} {months[date.getMonth()]}</Text>
                  <Text style={{ color: '#fff', fontSize: 70, fontWeight: '500', }}>{weatherData?.main.temp}°</Text>
                  <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>{weatherData?.weather[0]?.main}</Text>
                  <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Wind
                      name='wind' color="#fff" size={20}
                    />
                    <Text style={{ color: '#fff', fontSize: 17 }}>Wind</Text>
                    <Text style={{ color: '#fff', marginLeft: 30, fontSize: 17 }}> |  {weatherData?.wind.speed}KM</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 15,alignSelf:"center" }}>
                    <Drop
                      name='droplet' color="#fff" size={20}
                    />
                    <Text style={{ color: '#fff', fontSize: 17 }}>Hum</Text>
                    <Text style={{ color: '#fff', marginHorizontal:50,fontSize:17}}>|    {weatherData?.main.humidity}%</Text>
                  </View>
                </View>

                <View style={styles.lastbutton}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Wheasecond' as never,{data: city, position})}
                    style={{ flexDirection: 'row' }}>
                    <Text style={styles.buttontxt}>Forcast report  </Text>
                    <Down
                      style={{ alignSelf: 'flex-end' }}
                      name='up' color='black' size={14}
                    /></TouchableOpacity>
                </View>
              </View>
            }
          </>
      }

    </View>
  )
}

export default WheatherApp

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#47BFDF',
  },
 
  container: {
    marginTop: 230,
    height: 300,
    marginHorizontal: 20,
    backgroundColor: '#88c4f4',
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: '#fafafa'
  },
  lastbutton: {
    backgroundColor: 'white',
    padding: 13,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 9,
    marginRight: 5,
    marginLeft: 140,
    marginVertical: 30,
    width: '30%',
    flexDirection: "row"

  },
  buttontxt: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 0
  },

  button3: {
    backgroundColor: 'white',
    padding: -5,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 9,
    marginRight: 5,
    marginLeft: 10,
    marginVertical: 15,
    width: '90%',
    flexDirection: "row"

  },
  buttonText3: {
    color: 'black',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'left',
  },
})