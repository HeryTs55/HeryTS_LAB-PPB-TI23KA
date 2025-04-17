import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>History of Bicycle</Text>
        <Text style={styles.description}>
          A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-assisted,
          pedal-driven, single-track vehicle, with two wheels attached to a frame, one behind the other. A bicycle
          rider is called a cyclist, or bicyclist. Bicycles were introduced in the 19th century in Europe.
        </Text>
      </View>
      <View style={styles.imageBox}>
        <Image source={require('./assets/icon/listrik.jpg')} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 24,
    borderRadius: 6,
    width: 280,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#b22222',
    textAlign: 'center',
    backgroundColor: '#f0d6d6',
    paddingVertical: 4,
    borderRadius: 4,
  },
  description: {
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 22,
  },
  imageBox: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#eaf6ff',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 6,
  },
});
