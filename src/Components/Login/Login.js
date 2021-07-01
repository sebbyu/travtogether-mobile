import React from 'react';
import {
  View, 
  Text, 
  Image, 
  TextInput, 
  Button,
  TouchableOpacity,
  StyleSheet} from 'react-native';


const Login = () => {
  return (
    <View
      style={styles.container}>
      <Image
        source={require('./../../Assets/TravTogether-logo.png')}
        style={styles.image}
      />
      <TextInput
        placeholder="email"
        style={styles.inputs}
      />
      <TextInput
        placeholder="password"
        style={styles.inputs}
        secureTextEntry={true}
      />
      <View
        style={styles.buttonView}>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.orText}>
          ------------------------------     OR     ------------------------------
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  inputs: {
    borderColor: "gray",
    borderWidth: 0.5,
    width: 250,
    height: 35,
    margin: 5,
    fontSize: 12,
  },
  buttonView: {
    marginTop: 20,
  },
  button: {
    width: 250,
    height: 30,
    backgroundColor: "#6495ED",
    borderRadius: 4,
    margin: 1,
  },
  socialButton: {
    width: 250,
    height: 30,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginTop: 1,
    marginBottom: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
  },
  orText: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  }
})

export default Login;