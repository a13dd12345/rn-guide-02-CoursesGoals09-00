import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';


import { globalStyles } from './styles'

const styles = {
  ...globalStyles,
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Courses Goals v. 09-00</Text>
      <StatusBar style="auto" />
    </View>
  );
}

