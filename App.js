import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';


import { globalStyles } from './styles'

const styles = {
  ...globalStyles,
}

export default function App() {
  return (
    <View style={styles.empty}>
      <Text>Courses Goals v. 09-00</Text>
      <TextInput />
      <Button title="add goal"/>
      <StatusBar style="auto" />
    </View>
  );
}

