import { Alert} from 'react-native'

const Alerting = (title, msg) => {
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { 
        text: "OK", 
        onPress: () => console.log("OK Pressed") 
      }
    ]
  );
}
export default Alerting

    //lutho@gmail.com   1234567