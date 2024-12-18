import { Alert, FlatList, FlatListComponent, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Cloud from 'react-native-vector-icons/FontAwesome5'
import Icon2 from 'react-native-vector-icons/AntDesign'
import Icon3 from 'react-native-vector-icons/MaterialIcons'


const API_KEY = 'b30ddf0ab9040e5d098412b86aec2dab'

const Wheasecond = ({ route }: any) => {
  const { data, position } = route.params
  console.log('My data', data)
  const [weatherData, setWeatherData] = useState<any>([])
  const [Loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  console.log('position', position)
  console.log('data2', data)
  useFocusEffect(
    useCallback(
      () => {
        // getcity()
        console.log('got city', data)

      },
      [],
    )

  )

  useFocusEffect(
    useCallback(() => {
      getstoreddata()
      console.log('your data got', data)
    }, [data || position])
  )
  console.log('data3', data)



  const getstoreddata = async () => {
    setLoading(true)
    const URL = data ? `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${API_KEY}&units=metric` : `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
    try {
      const response = await fetch(URL)
      const Data = await response.json()
      console.log('data=======>', Data)
      if (response.ok) {
        setWeatherData(Data)
        setError('')
      } else {
        setError(Data.message)
      } setLoading(false)


    } catch (error: any) {


      console.error('Error details:', error);

      const errorMessage = error?.message || 'An unknown error occurred';
      Alert.alert('Error', errorMessage);
      setError(errorMessage);

    }
  }



  // const renderItem = ({ item }: any) => {
  //   console.log("itemdata", item);
  //   return (
  //     <View style={{ marginHorizontal: 25, alignItems: 'center' }}>
  //       <View style={{ marginVertical: 40, justifyContent: 'space-between', paddingVertical: 5, alignItems: 'center' }}>
  //         <Text style={{ marginVertical: 20, color: 'white' }}>{item.main.temp}°C</Text>
  //         <Cloud name="cloud-sun" size={20} color="white" />
  //         <Text style={{ color: 'white', marginVertical: 10 }}>{date.getHours()}:{date.getMinutes()}</Text>
  //       </View>
  //     </View>
  //   );
  // };
  
  // const date = new Date();
  // const months = [
  //   "Jan", "Feb", "Mar", "April", "May",
  //   "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  // ];
  
  // console.log("weather ", weatherData.list);
  
  // // Use the slice function here
  // const slicedWeatherData = weatherData?.list?.slice(1, 5); //  get the first 5  items
  
  // return (
  //   <View style={{ flex: 1, backgroundColor: '#47BFDF' }}>
  //     {Loading ? (
  //       <Text style={{ color: 'white', textAlign: 'center' }}>Loading...</Text>
  //     ) : error ? (
  //       <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
  //     ) : weatherData.list ? (
  //       <FlatList
  //         data={slicedWeatherData} // Use sliced data
  //         renderItem={renderItem as any}
  //         horizontal={true}
  //         keyExtractor={(item, index) => index.toString()}
  //       />
  //     ) : (
  //       <Text style={{ color: 'white', textAlign: 'center' }}>No Weather Data Available</Text>
  //     )}
  //     {/* Other components */}
  //   </View>
  // );
  

  const renderItem = ({ item }: any) => {

    console.log(" itemdata", item)
    return <View style={{ marginHorizontal: 25, alignItems: 'center' }}>
      <View style={{ marginVertical: 40, justifyContent: 'space-between', paddingVertical: 5, alignItems: 'center' }}>
        <Text style={{ marginVertical: 20, color: 'white' }}>{item.main.temp}°C</Text>
        <Cloud name='cloud-sun' size={20} color='white' />
        <Text style={{ color: 'white',marginVertical:10 }}>{date.getHours()}:{date.getMinutes()}</Text>
      </View>
    </View>
  }
  const date = new Date()
  const months = [
    "Jan", "Feb", "Mar", "April", "May",
    "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
  ]

  console.log("weather ", weatherData.list)

  const navigation = useNavigation<any>();

  return (

    <View style={{ flex: 1, backgroundColor: '#47BFDF' }}>

      {/* {Loading ? (
          <Text style={{ color: 'white', textAlign: 'center' }}>Loading...</Text>
        ) : error ? (
          <Text style={{ color: 'red', textAlign: 'center' }}>{error}</Text>
        ) : weatherData.list ? (
          <FlatList
            data={weatherData.list}
            renderItem={renderItem as any}
            horizontal={true}
          />
        ) : (
          <Text style={{ color: 'white', textAlign: 'center' }}>No Weather Data Available</Text>
        )} */}

      <View >
        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 40, marginHorizontal: 20 }}
          onPress={() => {
            navigation.navigate('WheatherApp');
          }}>
          <Image style={{ width: "10%", marginHorizontal: -10 }} source={require('./../images/up.png')} />
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>   Back</Text>
          <Image style={{ marginHorizontal: 200, marginVertical: 5 }} source={require('./../images/set.png')} />
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ marginHorizontal: 20, fontSize: 24, fontWeight: "700", color: 'white' }}>Today</Text>
        <Text style={{ color: 'white', marginRight: 25, fontSize: 15, fontWeight: "bold", marginVertical: 10 }}>{months[date.getMonth()]},{date.getDate()}</Text>

      </View>
      <FlatList data={weatherData.list}
        renderItem={renderItem as any}
        horizontal={true}
      />
      <View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <Text style={{ color: 'white', marginHorizontal: 20, fontSize: 20, fontWeight: "bold", marginVertical: -5 }}>Next Forecast</Text>
          <Image style={{ marginRight: 30 }} source={require('./../images/calendar.png')} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginHorizontal: 30, fontSize: 15, fontWeight: "bold", marginVertical: 45 }}>{months[date.getMonth()]},{date.getDate() + 1}</Text>
          <View style={{ marginHorizontal: 5, marginVertical: 3 }}>
            <Image  source={require('./../images/fullcloud.png')} />

            {/* <Image width={60} height={60} source={{ uri: `https://openweathermap.org/img/wn/${weatherData.list[0]?.weather[0].icon}@4x.png` }} /> */}
          </View>
          <Text style={{ color: "white", marginHorizontal: 0, marginVertical: 45, fontWeight: "800" }}>{weatherData?.list[5]?.main.temp}°C</Text>
          {/* <Text style={{ color: "white", marginHorizontal: 5, marginVertical: 45, fontWeight: "800" }}>26°C</Text> */}

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginHorizontal: 30, fontSize: 15, fontWeight: "bold", marginVertical: -35 }}>{months[date.getMonth()]},{date.getDate() + 2}</Text>
          <View>
            <Image style={{ marginVertical: -75 }} source={require('./../images/fullcloud.png')} />
          </View>
          <Text style={{ color: "white", marginHorizontal: 10, marginVertical: -35, fontWeight: "800" }}>{weatherData?.list[10]?.main.temp}°C</Text>
          {/* <Text style={{ color: "white", marginHorizontal: 5, fontWeight: "800" }}>26°C</Text> */}

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginHorizontal: 33, fontSize: 15, fontWeight: "bold", marginVertical: 18 }}>{months[date.getMonth()]},{date.getDate() + 3}</Text>
          <Image style={{ marginVertical: 2, marginHorizontal: 28 }} source={require('./../images/sunny.png')} />
          {/* <Text style={{ color: "white", marginHorizontal: 5, marginVertical: 45, fontWeight: "800" }}>26°C</Text> */}
          <Text style={{ color: "white", marginHorizontal: 15, marginVertical: 20, fontWeight: "800" }}>{weatherData?.list[15]?.main.temp}°C</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginHorizontal: 35, fontSize: 15, fontWeight: "bold", marginVertical: 3 }}>{months[date.getMonth()]},{date.getDate() + 4}</Text>
          <Image style={{ marginVertical: -40, marginHorizontal: -10 }} source={require('./../images/fullcloud.png')} />
          {/* <Text style={{ color: "white", marginHorizontal: 5, marginVertical: 45, fontWeight: "800" }}>26°C</Text> */}

          <Text style={{ color: "white", marginHorizontal: 20, marginVertical: 5, fontWeight: "800" }}>{weatherData?.list[20]?.main.temp}°C</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', marginHorizontal: 35, fontSize: 15, fontWeight: "bold", marginVertical: 10 }}>{months[date.getMonth()]},{date.getDate() + 5}</Text>
          <Image style={{ marginVertical: -30, marginHorizontal: -10 }} source={require('./../images/cloudsun.png')} />
          {/* <Text style={{ color: "white", marginHorizontal: 5, marginVertical: 45, fontWeight: "800" }}>26°C</Text> */}
          <Text style={{ color: "white", marginHorizontal: 20, marginVertical: 5, fontWeight: "800" }}>{weatherData?.list[25]?.main.temp}°C</Text>
        </View>


      </View>
      <View style={{ flexDirection: 'row', justifyContent: "center" }}>
        <Image style={{ marginHorizontal: 0, marginVertical: 15 }} source={require('./../images/sun2.png')} />
        <Text style={{ marginHorizontal: 0, marginVertical: 15, color: 'white' }}  >AccuWeather</Text>
      </View>



    </View>
  )
}

export default Wheasecond

const styles = StyleSheet.create({})












//<View>
//   <Text style={{ marginHorizontal: 13, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>{item.main.temp}C</Text>
//   <Image style={{ marginVertical: 150, marginHorizontal: -35 }} source={require('./../images/cloudsun.png')} />
//   <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>15.00</Text>

// </View>




{/* <View>
        <View>
          <Text style={{ marginHorizontal: 13, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>29°C</Text>
          <Image style={{ marginVertical: 150, marginHorizontal: -35 }} source={require('./../images/cloudsun.png')} />
          <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>15.00</Text>

        </View>
        <View >
          <Text style={{ marginHorizontal: 80, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>26°C</Text>
          <Image style={{ marginVertical: 150, marginHorizontal: 30 }} source={require('./../images/cloudsun.png')} />
          <Text style={{ marginHorizontal: 80, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>16.00</Text>


        </View>
        <View>

          <Text style={{ marginHorizontal: 150, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>24°C</Text>
          <Image style={{ marginVertical: 150, marginHorizontal: 100 }} source={require('./../images/fullcloud.png')} />
          <Text style={{ marginHorizontal: 150, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>17.00</Text>
          <Image style={{ marginHorizontal: 135, marginVertical: 50, width: "20%" }} source={require('./../images/rec.png')} />

        </View>
        <View>
          <Text style={{ marginLeft: 228, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>23°C</Text>
          <Image style={{ marginVertical: 150, marginHorizontal: 180 }} source={require('./../images/moon.png')} />
          <Text style={{ marginLeft: 225, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>18.00</Text>
        </View>
        <View>
          <Text style={{ marginLeft: 300, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>22°C</Text>
          <Image style={{ marginVertical: 150, marginHorizontal: 250 }} source={require('./../images/moon.png')} />
          <Text style={{ marginLeft: 300, fontSize: 15, fontWeight: "bold", marginVertical: -180, color: "white" }}>19.00</Text>

        </View>
      </View> */}


{/* <FlatList
        data={weatherData.list || []}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        style={{  borderWidth: 2, borderColor: '', marginVertical: 10 , height:100}}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      /> */}