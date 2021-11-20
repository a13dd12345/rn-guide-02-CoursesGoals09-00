import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';


import { globalStyles } from './styles'
import appStyles from './appStyles'

const styles = {
  ...globalStyles,
  ...appStyles,
}

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.empty}>
        <Text>Courses Goals v. 09-00</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal..."
          style={styles.inputContainer}
        />
      </View>
      <View style={styles.empty}>
        <Button title="add goal" />
      </View>
    </View>
  );
}

