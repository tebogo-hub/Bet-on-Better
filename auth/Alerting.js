import React from 'react'
import {Alert, Button} from 'react-native'
const Alerting  = (msg) => {
    
      Alert.alert(
        "Alert Title",
        msg,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
    export default Alerting

    //lutho@gmail.com   1234567