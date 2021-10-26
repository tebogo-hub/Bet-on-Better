
import React from 'react';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Gift from './Screens/Gift';
import Explore from './Screens/Explore';
import Popup from './Screens/Popup';
import Forgotpassword from './Screens/Forgotpassword';
import Donate from './Screens/Donate';
import Description from './Screens/Description';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Scrinstaeen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Forgotpassword" component={Forgotpassword}/> */}
        <Stack.Screen name="Home"  component={Home}/>
        <Stack.Screen name="Gift" component={Gift}/>
        <Stack.Screen name="Explore" component={Explore}/>
        <Stack.Screen name="Popup" component={Popup}/>
        <Stack.Screen name="Donate" component={Donate}/>
        <Stack.Screen name="Description" component={Description}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



