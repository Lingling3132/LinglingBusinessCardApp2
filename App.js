import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>oprn rcpo.jpn something</Text>
      <StatusBar style="auto" />
      <Text>Hello Anyone</Text>
      <Image
        style={styles.profilePic}
        sources={{uri: 'https://www.eachoneteachone.is/uploads/4/6/3/3/46337981/editor/img-5449.jpg?1611880626'}}
      />
      <Text style={styles.name}>LingLing Wang</Text>
      <Text style={styles.email}>Liliwang59220@gmail.com</Text>
      <TouchableOpacity
        style={styles.button}></TouchableOpacity>

        <Text style={styles.buttonText}>My website</Text>
        <Text style={styles.question}>Why did you want to learn mobile app development?</Text>
        <Text style={styles.answer}>I wanted to learn how to make apps because I have a cellphone and we use apps for almost everything. I thought it would be cool to learn how to make an app and download it on my own device.
        </Text>
      </View>

  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default TextInANest;
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98ff98',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
