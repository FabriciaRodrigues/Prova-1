import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {

  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> What's your name? </Text>
      <TextInput placeholder='Your name here...' onChangeText={(value) =>{
        setName(value);
      }}>
      </TextInput>
      <Button title='Say hello' onPress={() => {
        alert(`Hello ${name}!`);
      }}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60
  },
  headerText: {
    fontWeight: 'bold'
  },
  TextInput: {
    width: 100,
    borderColor: '#add8e6'
  }
});
