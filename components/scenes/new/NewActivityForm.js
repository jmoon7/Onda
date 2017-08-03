import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegularText from '../texts/RegularText';
import BoldText from '../texts/BoldText';

export default class NewActivityForm extends Component {
  render() {
    return (
        <View style={styles.card} elevation={5}>
          <View style={styles.header}>
            <BoldText style={{fontSize:27}}> Title </BoldText>
            <TouchableOpacity onPress={() => this.handleRemove(index)}>
              <Icon style={{marginRight: 5}} name="times" size={22} color="black"/>
            </TouchableOpacity>
          </View>

          <RegularText style={{fontSize:15, marginTop: 10}}> Description </RegularText>
          
          <View style={styles.time}>
            <Icon name="clock-o" size={22} color="grey"/>
            <Text> 1 hour session </Text>
          </View>
        </View>
    );  
  }
}
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 300,
    borderRadius: 20,
    padding: 30,
    margin: 50,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5
  }
});
