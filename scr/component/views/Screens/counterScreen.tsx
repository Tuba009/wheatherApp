import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = () => {
  // Set initial counter state to 0
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const increment = () => setCounter(counter + 1);

  // Function to decrement the counter
  const decrement = () => setCounter(counter - 1);

  // Function to reset the counter
  const reset = () => setCounter(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  counterText: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default CounterScreen;
