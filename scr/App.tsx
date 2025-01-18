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
// import Search from './Screens/Search'
import Ottp from './Screens/Ottp'
import Productd from './Screens/Productd'
import { NavigationContainer } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons'
import Icons5 from 'react-native-vector-icons/AntDesign'
import Icon6 from 'react-native-vector-icons/AntDesign'
import Icon7 from 'react-native-vector-icons/AntDesign'
import Icon8 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/Entypo'
import WheatherApp from './Screens/WheatherApp'
import Wheasecond from './Screens/Wheasecond'
import Productdet from './Screens/Productdet'
import ShoppingStore from './Screens/ShoppingStore'
import AddCart from './Screens/AddCart'
import Cart from './Screens/Cart'
import { Provider } from 'react-redux';
import store from './Screens/Store.tsx/Storee'
import Profile from './Screens/Profile'
import FireStore from './Screens/FireStore'
import { LogLevel, OneSignal } from 'react-native-onesignal';
import Home from './Screens/SocialMedia.tsx/Home'
import Signuppage from './Screens/SocialMedia.tsx/Signuppage'
import Login from './Screens/SocialMedia.tsx/Login'
import Otp from './Screens/SocialMedia.tsx/Otp'
import Apphome from './Screens/SocialMedia.tsx/Apphome'
import UserDetail from './Screens/SocialMedia.tsx/UserDetail'
import AddPostPage from './Screens/SocialMedia.tsx/Post'
import Post from './Screens/SocialMedia.tsx/Post'
import Account from './Screens/SocialMedia.tsx/Account'
import Activity from './Screens/SocialMedia.tsx/Activity'
import Search from './Screens/SocialMedia.tsx/Search'
import SplashScreen from './Screens/BloodBank.tsx/SplashScreen'
import Slider1 from './Screens/BloodBank.tsx/Slider1'
import Slider2 from './Screens/BloodBank.tsx/Slider2'
import BloodSignup from './Screens/BloodBank.tsx/BloodSignup'
import BloodLogin from './Screens/BloodBank.tsx/BloodLogin'
import DonorRequest from './Screens/BloodBank.tsx/DonorRequest'
import BloodRequest from './Screens/BloodBank.tsx/BloodRequest'
import Homenotregisters from './Screens/BloodBank.tsx/Homenotregisters'
import BloodHistory from './Screens/BloodBank.tsx/BloodHistory'
import BloodOTP from './Screens/BloodBank.tsx/BloodOTP'
import UserAccount from './Screens/BloodBank.tsx/UserAccount'
import MyDonations from './Screens/BloodBank.tsx/MyDonations'
import DonatedBlood from './Screens/BloodBank.tsx/DonatedBlood'













// const MoreTabs = createBottomTabNavigator({
//       screens: {
//         Home: {
//           screen: Apphome,
//           options: {
//             tabBarIcon: ({ color }) => (
//               <Icon1 style={{ width: 27, height: 26, }}
//                 name="home"
//                 color={color}
//                 size={25}
//               />
//             ),
//             tabBarLabel: '',
//           },
//         },
//         Search:{
//           screen:Search,
//           options:{
//             tabBarIcon: ({ color }) => (
//               <Icons5 style={{ width: 27, height: 26, }}
//                 name="search1"
//                 color={color}
//                 size={25}
//               />
//             ),
//             tabBarLabel:''

//           },
//         },
//         Post: {
//           screen: Post,
//           options: {
//             tabBarIcon: ({ color }) => (
//               <Icon6 style={{ width: 30, height: 28,borderRadius:4}}
//                 name="plussquare"
//                 color={color}
//                 size={30}
//               />
//             ),
//             tabBarLabel: '',
//             tabBarStyle:{
//               display:'none'
//             }
//           },
//         },
//         Activity:{
//           screen:Activity,
//           options:{
//             tabBarIcon: ({ color }) => (
//               <Icon7 style={{ width: 27, height: 26, }}
//                 name="hearto"
//                 color={color}
//                 size={25}
//               />
//             ),
//             tabBarLabel:''

//           },
//         },
//         Account: {
//           screen: Account,
//           options: {
//             tabBarIcon: ({ color }) => (
//               <Icon8 style={{ width: 27, height: 28, }}
//                 name="account-circle"
//                 color={color}
//                 size={30}
//               />
//             ),
//             tabBarLabel: '',
//           },
//         },
  
//       },
//       screenOptions: {
//         headerShown: false,
//         tabBarActiveTintColor: 'black'
//       },
  
//     });


//  const RootStack = createNativeStackNavigator({
//       screens: {
//         Home:Home,
//         Login:Login,
//         Otp:Otp,
//         Signuppage:Signuppage,
//         Home2:MoreTabs,
//         Search:Search,
//         Post:Post,
//         Activity:Activity,
//         Account:Account,
//         UserDetail:UserDetail,

  
//         },
//         screenOptions:{
//           headerShown: false
//         }
//     });
//     const Navigation = createStaticNavigation(RootStack);
  



const MyDrawer = createDrawerNavigator({
    screens: {
      Homenotregisters:Homenotregisters,
      DonorRequest:DonorRequest,
      BloodRequest:BloodRequest,
      BloodHistory:BloodHistory,
      UserAccount:UserAccount,
     
    },
    screenOptions: {
      headerShown: false
    }
  });

const RootStack = createNativeStackNavigator({
    screens: {
     SplashScreen:SplashScreen,
     Slider1:Slider1,
     Slider2:Slider2,
     BloodOTP:BloodOTP,
     BloodLogin:BloodLogin,
     BloodSignup:BloodSignup,
     Home:MyDrawer,
     DonatedBlood:DonatedBlood,
     MyDonations:MyDonations,
    
     

      },
      screenOptions:{
        headerShown: false
      }
  });
const Navigation = createStaticNavigation(RootStack,);


const App = () => {
    return (
      
     <View style={{flex: 1}}>
        {/* <Home/> */}
        {/* <Signuppage/> */}
        {/* <Login/> */}
        {/* <Otp/> */}
        {/* <Apphome/> */}
        {/* <UserDetail/> */}
        {/* <Post/> */}
        {/* <Account/> */}
        {/* <Activity/> */}
        {/* <Search/> */}
        {/* <Provider store={store}>
        <Navigation />
        </Provider> */}
        {/* <SplashScreen/> */}
        {/* <Slider1/> */}
        {/* <Slider2/> */}
        {/* <BloodSignup/> */}
        {/* <BloodLogin/> */}
        {/* <DonorRequest/> */}
        {/* <BloodRequest/> */}
        {/* <Homenotregisters/> */}
        {/* <BloodHistory/> */}
        {/* <BloodOTP/> */}
        <Navigation/>
       
     </View>
   )}
export default App








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
// const RootStack = createNativeStackNavigator({
//   screens: {
//     Add: ContactAppScreen,
//     Feed:ContactList,
//     Contacts:ContactDetails,
//     },
//     screenOptions:{
//       headerShown: false
//     }
// });
// const Navigation = createStaticNavigation(RootStack,);
// export default function App() {
//  return <Navigation />;

// }
// const MoreTabs = createBottomTabNavigator({
//     screens: {
//       Home: {
//         screen: Livingroom,
//         options: {
//           tabBarIcon: ({ color }) => (
//             <Icon1 style={{ width: 27, height: 26, }}
//               name="home"
//               color={color}
//               size={30}
//             />
//           ),
//           tabBarLabel: '',
//         },
//       },
//       Productd: {
//         screen: Productd,
//         options: {
//           tabBarIcon: ({ color }) => (
//             <Icon2 style={{ width: 27, height: 26 }}
//               name="align-justify"
//               color={color}
//               size={30}
//             />
//           ),
//           tabBarLabel: '',
//         },
//       },

//       Profile: {
//         screen: Profile,
//         options: {
//           tabBarIcon: ({ color }) => (
//             <Icon2 style={{ width: 27, height: 26 }}
//               name="user"
//               color={color}
//               size={30}
//             />
//           ),
//           tabBarLabel: '',
//         },
//       },


//     },
//     screenOptions: {
//       headerShown: false,
//       tabBarActiveTintColor: '#ED6767'
//     },

//   });

// const RootStack = createNativeStackNavigator({
//     screens: {
//       Furniture: Furniture,
//       Firstpage:Firstpage,
//       Secondpage:Secondpage,
//       LogIn:LogIn,
//       Signup:Signup,
//       Forgetpass:Forgetpass,
//       Ottp:Ottp,
//       Livingroom:MoreTabs,
//       Productd:Productd,
//       Profile:Profile,

//       },
//       screenOptions:{
//         headerShown: false
//       }
//   });
// const Navigation = createStaticNavigation(RootStack,);
// // // const Navigation = createStaticNavigation(MoreTabs,);


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

// const MoreTabs = createBottomTabNavigator({
//   screens: {
//     ShoppingStore: {
//       screen: ShoppingStore,
//       options: {
//         tabBarIcon: ({ color }) => (
//           <Icon1 style={{ width: 27, height: 26, }}
//             name="home"
//             color={color}
//             size={30}
//           />
//         ),
//         tabBarLabel: '',
//       },
//     },
//     AddCart: {
//       screen: AddCart,
//       options: {
//         tabBarIcon: ({ color }) => (
//           <Icon2 style={{ width: 27, height: 26 }}
//             name="align-justify"
//             color={color}
//             size={30}
//           />
//         ),
//         tabBarLabel: '',
//       },
//     },
//     Cart: {
//       screen: Cart,
//       options: {
//         tabBarIcon: ({ color }) => (
//           <Icon3 style={{ width: 27, height: 26 }}
//             name="shopping-cart"
//             color={color}
//             size={30}
//           />
//         ),
//         tabBarLabel: '',
//       },
//     },


//   },
//   screenOptions: {
//     headerShown: false,
//     tabBarActiveTintColor: '#ED6767'
//   },

// });


// const RootStack = createNativeStackNavigator({
//   screens: {
//     MoreTabs: MoreTabs,
//     ShoppingStore: ShoppingStore,
//     AddCart: AddCart,
//     Cart: Cart

//   },
//   screenOptions: {
//     headerShown: false
//   }
// });
// const Navigation = createStaticNavigation(RootStack,);

{/* <Provider store={store}>
<Navigation />
</Provider> */}


// export default function App() {



// }







// const App = () => {
//     return (

//  <View style={{flex: 1}}>
//   <FireStore/>
{/* <Cart/> */ }
{/* <AddCart/> */ }
{/* <ShoppingStore/> */ }
{/* <Wheasecond/> */ }
{/* <WheatherApp/> */ }
{/* <Productdet/> */ }
{/* <Productd/> */ }
{/* <Ottp/>  */ }
{/* <Search/> */ }
{/* <Livingroom/> */ }
{/* <Forgetpass/> */ }
{/* <Signup/> */ }
{/* <LogIn/> */ }
{/* <Secondpage/> */ }
{/* <Firstpage/> */ }
{/* <Furniture/> */ }
{/* <CounterScreen/> */ }
{/* <ContactAppScreen/> */ }
{/* <ContactList/> */ }
{/* <asynstorage/> */ }
{/* <ContactDetails/> */ }

{/* <Provider store={store}>
  <Navigation />
</Provider> */}

// </View>
//   )}
// export default App








// const App = () => {
//    // Remove this method to stop OneSignal Debugging
//    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

//    // OneSignal Initialization
//    OneSignal.initialize("b84b1b47-c3df-4442-8351-f1b4aa20e422");
 
//    // requestPermission will show the native iOS or Android notification permission prompt.
//    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
//    OneSignal.Notifications.requestPermission(true);
 
//    // Method for listening for notification clicks
//    OneSignal.Notifications.addEventListener('click', (event) => {
//      console.log('OneSignal: notification clicked:', event);
//    });
//   return (
   
//   <View>
//     <Text style={{ color: 'red' }}>Hello</Text>
//   </View>
//   )

// }
// export default App




// const App = () => {

//   // Remove this method to stop OneSignal Debugging
//   OneSignal.Debug.setLogLevel(LogLevel.Verbose);

//   // OneSignal Initialization
//   OneSignal.initialize("ONESIGNAL_APP_ID");

//   // requestPermission will show the native iOS or Android notification permission prompt.
//   // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
//   OneSignal.Notifications.requestPermission(true);

//   // Method for listening for notification clicks
//   OneSignal.Notifications.addEventListener('click', (event) => {
//     console.log('OneSignal: notification clicked:', event);
//   });

// }
// export default App