
import React from 'react';

import LoaderScreen from './Screens/LoaderScreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import Gift from './Screens/Gift';
import Explore from './Screens/Explore';
import Popup from './Screens/Popup';
import Forgotpassword from './Screens/Forgotpassword';
import Donate from './Screens/Donate';
import ContactForm from './Screens/ContactForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import getNgos from './DataBase/FetchData'


const Stack = createNativeStackNavigator();

export default function App({ navigation }) {getNgos

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LoaderScreen"component={LoaderScreen}/>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gift" component={Gift} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Popup" component={Popup} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="ContactForm" component={ContactForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



