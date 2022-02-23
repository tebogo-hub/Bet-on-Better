import React, { useState } from "react";
import { FirebaseSignUp, Naviga } from "../auth/FirebaseSignUp";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Alerting from "../auth/Alerting";

export default function Signup({ navigation }) {
  const [Fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let title = 'OOPS'
  let message = "passwords doesn't match!";
  const FirebaseSign = (navi) => {
    if (password == "" || confirmPassword == "" || password !== confirmPassword) {
      Alerting(title, message);
      setPassword("")
      setConfirmPassword("")
    } else {
      FirebaseSignUp(Fname, email, password, navi);
    }
  };

  return (
    <ImageBackground
      style={styles.container}

    >
      <View style={styles.Logo}>
        <Text style={styles.Bet}>Bet</Text>
        <Text style={styles.on}>on</Text>
      </View>
      <View style={styles.logo2}>
        <Text style={styles.better}>Better</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          style={styles.TextInput}
          onChangeText={(Fname) => setFname(Fname)}
        />
        <TextInput
          placeholder="Email"
          style={styles.TextInput2}
          onChangeText={(email) => setEmail(email)}
        />

        <TextInput
          placeholder="Password"
          style={styles.TextInput3}
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <TextInput
          placeholder="Confirm Password"
          style={styles.TextInput4}
          value={confirmPassword}
          onChangeText={(confirmPassword) =>
            setConfirmPassword(confirmPassword)
          }
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => FirebaseSign(navigation)}
        >
          <Text style={styles.logintext}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textbottom}>
          By helping a soul, together we can change the world.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
  },
  Logo: {
    marginHorizontal: "1%",
    display: "flex",
    flexDirection: "row",
  },
  logo2: {
    marginHorizontal: "5%",
  },
  Bet: {
    position: 'absolute',
    color: 'rgba(94, 206, 253, 1)',
    left: '42px',
    top: '97px',
    fontStyle: 'normal',
    fontWeight: "500px",
    fontSize: 24,
    lineHeight: "42px",
  },
  on: {
    position: 'absolute',
    width: '41px',
    height: '42px',
    left: 80,
    top: '97px',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '42px',
    color: 'rgba(184, 129, 207, 1)',
  },
  better: {
    position: 'absolute',
    color: 'rgba(184, 129, 207, 1)',
    height: '50px',
    left: '8%',
    top: 120,
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 42,
  },
  inputContainer: {
    marginHorizontal: "1%",
    marginVertical: "50%",
    bottom: "50px",
  },
  TextInput: {
    borderWidth: "1px",
    position: "absolute",
    width: "300px",
    left: "37px",
    top: "100px",
    padding: "5px",
    borderColor: "white",
    height: "40px",
    color: "black",
    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
    borderRadius: '10px',
  },
  TextInput2: {
    borderWidth: "1px",
    position: "absolute",
    width: "300px",
    left: "37px",
    top: "150px",
    padding: "5px",
    height: "40px",
    borderColor: "white",
    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
    borderRadius: '10px',
  },
  TextInput3: {
    borderWidth: "1px",
    position: "absolute",
    width: "300px",
    height: "40px",
    top: "200px",
    outline: "none",
    padding: "5px",
    borderColor: "white",
    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
    borderRadius: '10px',
    left: "37px",
  },
  TextInput4: {
    borderWidth: "1px",
    position: "absolute",
    width: "300px",
    height: "40px",
    top: "250px",
    outline: "none",
    padding: "5px",
    borderColor: "white",
    boxShadow: '0px 4px 4px rgba(0,0,0, 0.2)',
    borderRadius: '10px',
    left: "37px",
  },
  touchableOpacity: {
    position: "absolute",
    width: "300px",
    height: "59px",
    left: "40px",
    backgroundColor: "#ffac2c",
    boxShadow: "0px 4px 4px rgba(0,0,0, 0.25)",
    borderRadius: "16px",
    top: "80px",
  },
  logintext: {
    position: "absolute",
    height: "21px",
    left: "40%",
    fontSize: "normal",
    fontweight: 500,
    fontSize: "18px",
    lineHeight: "21px",
    color: "white",
    top: "20px",
  },
  textbottom: {
    position: "absolute",
    height: "14px",
    left: "34px",
    top: "400px",
    fontFamily: "arial",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    color: "rgba(94, 206, 253, 1)",
  },
});
