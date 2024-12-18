import React, { useCallback, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Cloud from 'react-native-vector-icons/FontAwesome5';

const API_KEY = 'b30ddf0ab9040e5d098412b86aec2dab';

const Wheasecond = ({ route }: any) => {
  const { data, position } = route.params;
  const navigation = useNavigation<any>();

  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [fiveDayForecast, setFiveDayForecast] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getStoredData = async () => {
    setLoading(true);
    const URL = data
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${data}&appid=${API_KEY}&units=metric`
      : `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(URL);
      const result = await response.json();

      if (response.ok) {
        setWeatherData(result.list);
        setError('');
        processFiveDayForecast(result.list);
      } else {
        setError(result.message);
      }
    } catch (err: any) {
      console.error('Error details:', err);
      const errorMessage = err?.message || 'An unknown error occurred';
      Alert.alert('Error', errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const processFiveDayForecast = (list: any[]) => {
    const dailyForecast: any[] = [];
    const seenDates: Set<string> = new Set();

    for (const item of list) {
      const forecastDate = new Date(item.dt_txt).toISOString().split('T')[0];
      if (!seenDates.has(forecastDate)) {
        seenDates.add(forecastDate);
        dailyForecast.push(item);
      }
      if (dailyForecast.length === 5) break;
    }

    setFiveDayForecast(dailyForecast);
  };

  useFocusEffect(
    useCallback(() => {
      getStoredData();
    }, [data, position])
  );

  const renderForecastItem = ({ item }: any) => {
    const forecastDate = new Date(item.dt_txt);
    const day = `${months[forecastDate.getMonth()]} ${forecastDate.getDate()}`;
    const temp = `${item.main.temp}°C`;
    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

    return (
      <View style={styles.forecastItemContainer}>
        <Text style={styles.forecastDate}>{day}</Text>
        <Image source={{ uri: iconUrl }} style={styles.forecastIcon} />
        <Text style={styles.forecastTemp}>{temp}</Text>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={styles.loadingText}>Loading weather data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('WheatherApp')}>
          <Image style={styles.headerIcon} source={require('./../images/up.png')} />
          <Text style={styles.headerText}>Back</Text>
          <Image style={styles.headerSettingsIcon} source={require('./../images/set.png')} />
        </TouchableOpacity>
      </View>

      {/* Today's Weather */}
      <View style={styles.todayContainer}>
        <Text style={styles.todayText}>Today</Text>
        <Text style={styles.todayDate}>{`${months[date.getMonth()]}, ${date.getDate()}`}</Text>
      </View>

      {/* 5-Day Forecast */}
      <View>
        <Text style={styles.forecastHeader}>Next 5 Days Forecast</Text>
        <FlatList
          data={fiveDayForecast}
          renderItem={renderForecastItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Wheasecond;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47BFDF',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#47BFDF',
  },
  loadingText: {
    color: 'white',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  headerIcon: {
    width: '10%',
    marginHorizontal: -10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
  headerSettingsIcon: {
    marginHorizontal: 200,
    marginVertical: 5,
  },
  todayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  todayText: {
    marginHorizontal: 20,
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
  todayDate: {
    color: 'white',
    marginRight: 25,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  forecastHeader: {
    color: 'white',
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  forecastItemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  forecastDate: {
    color: 'white',
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  forecastIcon: {
    width: 50,
    height: 50,
  },
  forecastTemp: {
    color: 'white',
    marginHorizontal: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
