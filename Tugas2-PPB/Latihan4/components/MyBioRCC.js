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
      educations: [
        { id: 1, school: 'SD Kita Yadika' },
        { id: 2, school: 'SMPN 2 Pakkat Langge' },
        { id: 3, school: 'SMA Taruna Mandiri Pekanbaru' },
      ],
      mobile_phone: '082286479558',
      email: '2323100306@student.ibik.ac.id',
      gender: 'M',
      tall_body: 170,
      weight_body: 60,
    };
  }

  render() {
    const { identity, educations, mobile_phone, email, gender, tall_body, weight_body } = this.state;
    return (
      <View style={styles.card}>
        <Text style={styles.heading}>MyBio (RCC)</Text>
        <Text>NPM: {identity.npm}</Text>
        <Text>Name: {identity.firstname} {identity.middlename} {identity.lastname}</Text>
        <Text>Educations:</Text>
        {educations.map(item => <Text key={item.id}>- {item.school}</Text>)}
        <Text>Phone: {mobile_phone}</Text>
        <Text>Email: {email}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Height: {tall_body} cm</Text>
        <Text>Weight: {weight_body} kg</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 230, 
        marginBottom: 20,
    },      
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
});
