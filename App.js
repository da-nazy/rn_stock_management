import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  Dashboard from './Component/Dashboard';
import Transactions from './Component/Transactions';
export default function App() {
   
  const Stack=createStackNavigator();
  return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown:false}}
       />

        <Stack.Screen
         name="Transactions"
         component={Transactions}
         options={{headerShown:false}}
        />

     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
