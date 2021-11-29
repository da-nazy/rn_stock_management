import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import  Dashboard from './Component/Dashboard';
import Transactions from './Component/Transactions';
import Products from './Component/Products';
import IconComp from './Component/Util/IconComp';
export default function App() {
   
   const ProductHead=(props)=>{
     return(
      <TouchableOpacity  onPress={()=>props.navigation.goBack()} style={{height:35,display:'flex',flexDirection:'row',alignItems:'center',paddingLeft:5}}>
        <IconComp name="chevron-left" size={20} style={{color:'#5EA37C'}} />
        <Text style={{color:'#5EA37C',fontSize:17,fontWeight:'700',paddingLeft:10}}> Products</Text>
        </TouchableOpacity>
     )
   } 

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
        
        <Stack.Screen
        name="Products"
        component={Products}
        options={{ header: (props) =>ProductHead(props) }}
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
