import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from './MainTab';
import Barber from '../screens/Barber';

export type StackParamList = {
  Barber: {
    id: number;
    avatar: string;
    name: string;
    stars: number;
    photos: [{url: string}];
    services: [
      {
        name: string;
        price: number;
      },
    ];
    testimonials: [
      {
        name: string;
        rate: number;
        body: string;
      },
    ];
  };
};

export type RootRouteProps<RouteName extends keyof StackParamList> = RouteProp<
  StackParamList,
  RouteName
>;

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
    <Stack.Screen name="Barber" component={Barber} />
  </Stack.Navigator>
);
