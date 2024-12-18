import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CounterScreen from './component/views/Screens/counterScreen'
import ContactAppScreen from './component/views/Screens/ContactAppScreen'
import ContactList from './component/views/Screens/ContactList'
import ContactDetails from './component/views/Screens/ContactDetails'
import Furniture from './Screens/Furniture'
import asynstorage from './component/views/Screens/practice'
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Detail from 'react-native-vector-icons/MaterialCommunityIcons'
import Secondpage from './Screens/Secondpage'
import Firstpage from './Screens/Firstpage'
import LogIn from './Screens/LogIn'
import Signup from './Screens/Signup'
import Forgetpass from './Screens/Forgetpass'
import Livingroom from './Screens/Livingroom'
import Search from './Screens/Search'
import Ottp from './Screens/Ottp'
import Productd from './Screens/Productd'
import { NavigationContainer } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import WheatherApp from './Screens/WheatherApp'
import Wheasecond from './Screens/Wheasecond'
import Productdet from './Screens/Productdet'



// const MoreTabs = createBottomTabNavigator({
//   screens: {  
//Add:ContactAppScreen,
//     Feed: ContactList,
//     Contacts: ContactDetails,
//   },
//   screenOptions: {
//     headerShown: false
//   }
//  });

// const MyDrawer = createDrawerNavigator({
//     screens: {
//       Home:MoreTabs,
//       Add: ContactAppScreen,
//       Feed:ContactList,
//       Contacts:ContactDetails,
//     },
//     screenOptions: {
//       headerShown: false
//     }
//   });
const RootStack = createNativeStackNavigator({
  screens: {
    Add: ContactAppScreen,
    Feed:ContactList,
    Contacts:ContactDetails,
    },
    screenOptions:{
      headerShown: false
    }
});
const Navigation = createStaticNavigation(RootStack,);
export default function App() {
 return <Navigation />;

}
// const MoreTabs = createBottomTabNavigator({

//   Livingroom: {
//     screen: Livingroom,
//     navigationOptions: {
//       tabBarIcon: () => (
//         <Icon1
//           name="home"
//           color="black"
//           size={20}
//         />
//       ),
//       tabBarLabel: '',
//     },
//   },
//   Search: {
//     screen: Search,
//     navigationOptions: {
//       tabBarIcon: () => (
//         <Icon1
//           name="home"
//           color="black"
//           size={20}
//         />
//       ),
//       tabBarLabel: '',
//     },

//   },
// });
// const MoreTabs = createBottomTabNavigator({
//     screens: {  
//       Home:Livingroom,
//       Productd:Productd,
      
//     },
//     screenOptions: {
//       headerShown: false
//     }
//    });



// const RootStack = createNativeStackNavigator({
//     screens: {
//       Furniture: Furniture,
//       Firstpage:Firstpage,
//       Secondpage:Secondpage,
//       LogIn:LogIn,
//       Signup:Signup,
//       Forgetpass:Forgetpass,
//       Ottp:Ottp,
//       MoreTabs:MoreTabs,
//       Livingroom:Livingroom,
//       Productd:Productd,

//       },
//       screenOptions:{
//         headerShown: false
//       }
//   });
// const Navigation = createStaticNavigation(RootStack,);
// const Navigation = createStaticNavigation(MoreTabs,);


// export default function App() {
//  return <Navigation />;

// }



// const RootStack = createNativeStackNavigator({
//     screens: {
//       WheatherApp: WheatherApp,
//       Wheasecond:Wheasecond,
     
//       },
//       screenOptions:{
//         headerShown: false
//       }
//   });
// const Navigation = createStaticNavigation(RootStack,);



// export default function App() {
//  return <Navigation />;

// }






// const App = () => {
//     return (

//  <View style={{flex: 1}}>
//   <Wheasecond/>
 {/* <WheatherApp/> */}
//  <Productdet/>
      {/* <Productd/> */}
      {/* <Ottp/>  */}
      {/* <Search/> */}
      {/* <Livingroom/> */}
      {/* <Forgetpass/> */}
      {/* <Signup/> */}
      {/* <LogIn/> */}
      {/* <Secondpage/> */}
      {/* <Firstpage/> */}
      {/* <Furniture/> */}
      {/* <CounterScreen/> */}
       {/* <ContactAppScreen/> */}
       {/* <ContactList/> */}
      {/* <asynstorage/> */}
         {/* <ContactDetails/> */}
         
      
    // </View>
    //   )}
    // export default App
