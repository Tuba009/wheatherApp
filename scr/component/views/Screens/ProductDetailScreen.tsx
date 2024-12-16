
import { View,Image,Text,StyleSheet,TextInput} from 'react-native'
import React from 'react'
const App = () => {
  return (
    <View>
      <View style={{backgroundColor:'white'}}>
        <View>
          <Image style={{  width: 40,height: 40,marginHorizontal: 25,marginVertical: 25,}} source={require('./image/circle1.png')} />
          <Image style={{width: 20,height: 20,marginHorizontal: 35,marginVertical:-55,}} source={require('./image/Apps.png')} />
          <Image style={{width: 66,height: 53,marginHorizontal: 300,marginVertical: 30,}} source={require('./image/cornerimage.jpg')} />
        </View>
        <View>
            <Image style={{ height: 200, width: 390,marginLeft:-21,marginTop: 20, }} 
                 source={require('./image/girl2.jpg')} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, height: 20, }}>

            <View>
              <Text style={{color: '#000000', fontSize: 11, fontWeight: '800', height: 25 }}>     Striped Pink Dress</Text>
              {/*<Text style={{ color: '#757575', fontSize: 11, fontWeight: "750" }}>       Rs.  1,299.00</Text>*/}
            </View>

          </View>

          <View/>
          {/*<View>
              <Text style={{ backgroundColor: '#F38181',borderRadius: 15,width: 150,height: 30,marginTop: 200,alignItems: 'center',justifyContent: 'center',}}>Add to Cart</Text>
            </View>*/}

        <View style={{flexDirection: 'row',justifyContent: 'space-around',marginTop: 300,marginBottom: 10,}} >

          <Image source={require('./image/Vectorhouse.png')} />
          <Image source={require('./image/Vector2lines.png')} />
          <Image source={require('./image/Vector3cart.png')} />
          <Image source={require('./image/Vector4icon.png')} />
        </View>

      </View>

    </View>

  )


}
export default App