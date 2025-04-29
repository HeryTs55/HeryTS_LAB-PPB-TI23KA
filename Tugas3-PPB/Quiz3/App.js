import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [color, setColor] = useState('blue');

  const changeColor = () => {
    if (color === 'blue') {
      setColor('red');
    } else if (color === 'red') {
      setColor('green');
    } else if (color === 'green') {
      setColor('yellow');
    } else if (color === 'yellow') {
      setColor('purple');
    } else {
      setColor('blue');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: color }]} />
      <TouchableOpacity style={styles.button} onPress={changeColor}>
        <Text style={styles.buttonText}>Ganti Warna</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    borderRadius: 15,
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
