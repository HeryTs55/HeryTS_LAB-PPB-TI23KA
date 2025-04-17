import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HistoryCard from './components/HistoryCard';
import ImageBox from './components/ImageBox';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HistoryCard />
        <ImageBox />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
