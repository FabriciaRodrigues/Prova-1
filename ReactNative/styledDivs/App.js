import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
        <View style={styles.square}>
           <Text>Square 1</Text>
        </View>

        <View style={styles.square1}>
          <Text>Square 2</Text>
        </View>

        <View style={styles.square2}>
          <Text>Square 3</Text>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30
  },
  square:{
    width: 70,
    height: 70,
    backgroundColor: '#87cefa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  square1:{
    width: 70,
    height: 70,
    backgroundColor: '#808080',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  square2:{
    width: 70,
    height: 70,
    backgroundColor: '#7ba05b',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
