import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageBox = () => {
  return (
    <View style={styles.imageBox}>
      <Image source={require('../assets/icon/listrik.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
    imageBox: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 6,
      borderRadius: 6,
      backgroundColor: '#e6f2f9',
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 6,
    },
  });
  

export default ImageBox;
