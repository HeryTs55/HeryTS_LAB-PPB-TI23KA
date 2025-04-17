import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/icon/logo-ibik.png')} 
        style={{ width: 150, height: 150 }} 
      />
      
      <Text style={{ color: 'white', marginTop: 40, fontSize: 14, position: 'absolute', bottom: 40 }}>
        Loading...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080', 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
