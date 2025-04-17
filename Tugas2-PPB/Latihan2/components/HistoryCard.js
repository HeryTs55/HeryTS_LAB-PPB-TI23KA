import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>History of Bicycle</Text>
      <Text style={styles.description}>
        A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-assisted,
        pedal-driven, single-track vehicle, with two wheels attached to a frame, one behind the other. A bicycle
        rider is called a cyclist, or bicyclist. Bicycles were introduced in the 19th century in Europe.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 16,
      marginBottom: 20,
      borderRadius: 8,
      width: 300,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    },
    heading: {
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 10,
      color: '#b22222',
      textAlign: 'center',
      backgroundColor: '#f9dcdc',
      paddingVertical: 4,
      borderRadius: 4,
    },
    description: {
      fontSize: 15,
      color: '#333',
      textAlign: 'justify',
      lineHeight: 22,
    },
  });
  

export default HistoryCard;
