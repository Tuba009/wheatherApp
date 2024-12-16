import { View,Image,Text,StyleSheet,TextInput} from 'react-native'
import React from 'react'
import { useState } from 'react'

const Searchbar = () => {
  const [first, setfirst] = useState('')
  return (
    <View >
      <View style={styles.Searchbar}>
        <TextInput style={styles.Textinput} placeholder='Search' placeholderTextColor="#aaa" value={first} onChangeText={setfirst} />
      </View>
      <Image style={styles.iconsearch} source={require('./image/Search.png')} />
    </View>
  )
}
const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Image style={styles.circle} source={require('./image/circle1.png')} />
          <Image style={styles.ciimg} source={require('./image/Apps.png')} />
          <Image style={styles.Imgelogo} source={require('./image/Ellipse 2.png')} />
        </View>

        <View>

          {/* Heading*/}
         <Text style={styles.Textstyle}>Match your style</Text>
          {/* Searchbar */}
          <Searchbar />

          {/* Tabs */}
          <View style={styles.Tabs}>

          <View style={styles.tab1}>
              <Text style={styles.trending}>Trending Now</Text>
            </View>

            <View style={styles.tab2}>
              <Text style={styles.All}>All</Text>
            </View>

            <View style={styles.tab3}>
              <Text style={styles.Now}> New</Text>
            </View>

          </View>

          {/* two Images   */}

          <View style={styles.img1}>
            <Image style={{ height: 220, width: 155, }} source={require('./image/girl1.jpg')} />
            <Image style={{ height: 220, width: 155, }} source={require('./image/girl2.jpg')} />
          </View>

          <View style={styles.hearts}>
          
           
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

          <View style={styles.img2}>
            <Image style={{ height: 220, width: 155, }} source={require('./image/girl3.jpg')} />
            <Image style={{ height: 220, width: 155, }} source={require('./image/girl4.jpg')} />
          </View>
          <View style={styles.hearts}>
            
           
          </View>
        </View>

        <View style={styles.footer} />


        <View style={styles.footericon} >

          <Image source={require('./image/Vectorhouse.png')} />
          <Image source={require('./image/Vector2lines.png')} />
          <Image source={require('./image/Vector3cart.png')} />
          <Image source={require('./image/Vector4icon.png')} />
        </View>

      </View>

    </View>
  )
}
//styling sheet
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff1f6',
  },
  circle: {
    width: 40,
    height: 40,
    marginHorizontal: 25,
    marginVertical: 25,
  },
  ciimg: {
    width: 20,
    height: 20,
    marginHorizontal: 35,
    marginVertical:-55,
  },
  Imgelogo: {
    width: 66,
    height: 53,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  Textstyle: {
    fontSize: 25,
    color: 'black',
    width: 500,
    height: 55,
    marginHorizontal: 35,
    marginVertical: -35,
  },
  Searchbar: {
    backgroundColor: 'white',
    width: 300,
    height: 45,
    color: 'black',
    borderRadius: 17,
    margin: 12,
    marginHorizontal: 33,
    marginTop: 40,
    alignContent: 'center',
  },
  Textinput: {
    marginHorizontal: 40,
    marginTop: -9,
    height: 63,
    width: 180,
    color: 'black',
    fontSize: 16,
  },
  iconsearch: {
    marginHorizontal: 43,
    marginVertical: -48,
    width: 29,
  },
  Tabs: {
    flexDirection: 'row',
    height: 40,
    width: 330,
    margin: 25,
    marginTop: 80,
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
    width: 90,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Now: {
    color: '#8A8A8A',
  },
  img1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 28,
    marginEnd: 39,

  },
  hearts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 30,
    marginEnd: 40,
    marginTop: -200,
    width:0,
    height:32,
    
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
  img2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 30,
    marginEnd: 45,
  },
  footer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    
  },
  footericon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 120,
    marginBottom: 25,
  }
})
export default App;