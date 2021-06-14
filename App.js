import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from './src/HomeComponent'

import ChatScreen from './src/HomeComponent/Chat/ChatScreen'

export default function App({navigation }) {
  const Stack = createStackNavigator();
 
  return (
    <>
     <StatusBar style="dark" backgroundColor={'#fff'} />
       <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none" >
        <Stack.Screen name="Dashboard" component={HomeStack} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  
    </>
  );
}
