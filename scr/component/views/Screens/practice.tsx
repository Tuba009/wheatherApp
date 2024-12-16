import * as React from 'react';
import { Text, View } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} 
from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('More')}>Go to More</Button>
      <Button
        onPress={() => navigation.navigate('More', { screen: 'Messages' })}>
        Go to Messages
      </Button>
    </View>
  );
}

function FeedScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

function MessagesScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const MoreTabs = createBottomTabNavigator({
  screens: {
    Feed: FeedScreen,
    Messages: MessagesScreen,
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    More: {
      screen: MoreTabs,
      options: {
        headerShown: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
