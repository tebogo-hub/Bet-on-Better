
import React from 'react';
import Login from './Screens/Login'
import Signup from './Screens/Signup';
import Home from './Screens/Home'
import Popup from './Screens/Popup'
import Forgotpassword from './Screens/Forgotpassword'
import Donate from './Screens/Donate'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Forgotpassword" component={Forgotpassword}/> 
        <Stack.Screen name="Home" component={Home}/> 
        <Stack.Screen name="Popup" component={Popup}/> 
        <Stack.Screen name="Donate" component={Donate}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


