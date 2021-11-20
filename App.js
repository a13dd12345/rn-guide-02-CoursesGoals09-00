import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';


import { globalStyles } from './styles'
import appStyles from './appStyles'

const styles = {
  ...globalStyles,
  ...appStyles,
}

export default function App() {

  const [goalItemInput, setGoalItemInput] = useState('')

  const goalItemInputHandler = (goalItemTextInput) => {
    setGoalItemInput(goalItemInput => goalItemTextInput)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.empty}>
        <Text>Courses Goals v. 09-00</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal..."
          style={styles.inputContainer}
          onChangeText={goalItemInputHandler}
          value={goalItemInput}
        />
      </View>
      <View style={styles.empty}>
        <Button title="add goal" />
      </View>
      <View style={styles.empty}>
        <Text>{goalItemInput}</Text>
      </View>
    </View>
  );
}

