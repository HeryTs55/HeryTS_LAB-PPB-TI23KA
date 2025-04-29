import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MyBioRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: {
        npm: 232310030,
        firstname: 'HERY',
        middlename: 'TUA',
        lastname: 'SIGALINGGING',
      },
      instansi: 'IBI Kesatuan',
      jurusan: 'Teknologi Informasi',
      kelas: 'TI-23-KA',
      mobile_phone: '082286479558',
      email: '232310030@student.ibik.ac.id',
      gender: 'M',
    };
  }

  render() {
    const { identity, instansi, jurusan, kelas, mobile_phone, email, gender } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Data Diri (RCC)</Text>
        <View style={styles.card}>
          <Text style={styles.item}><Text style={styles.label}>NPM:</Text> {identity.npm}</Text>
          <Text style={styles.item}><Text style={styles.label}>Nama:</Text> {identity.firstname} {identity.middlename} {identity.lastname}</Text>
          <Text style={styles.item}><Text style={styles.label}>Instansi:</Text> {instansi}</Text>
          <Text style={styles.item}><Text style={styles.label}>Jurusan:</Text> {jurusan}</Text>
          <Text style={styles.item}><Text style={styles.label}>Kelas:</Text> {kelas}</Text>
          <Text style={styles.item}><Text style={styles.label}>Nomor HP:</Text> {mobile_phone}</Text>
          <Text style={styles.item}><Text style={styles.label}>Email:</Text> {email}</Text>
          <Text style={styles.item}><Text style={styles.label}>Jenis Kelamin:</Text> {gender}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9fafe',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
    color: '#444',
  },
});
