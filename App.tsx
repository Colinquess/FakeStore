import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import Header from './app/src/components/header';
import Shopping from './app/src/pages/shopping';
import Checkout from './app/src/pages/checkout';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Shopping"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Shopping" component={Shopping} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
