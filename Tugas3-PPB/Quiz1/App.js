import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MyBioRCC from './components/MyBioRCC';
import MyBioRFC from './components/MyBioRFC';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.rowContainer}>
        <MyBioRCC />
        <MyBioRFC />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
});
