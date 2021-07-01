import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


const StartingPage = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("./../../Assets/TravTogether-logo.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  }
})


export default StartingPage;