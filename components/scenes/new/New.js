import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActivityPicker from './ActivityPicker';
import Header from '../Header';

export default class NewActivity extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <Header title='LIVEMORE'/>
        <ActivityPicker/>
      </View>
    );	
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
	},
  header: {
    margin: 20,
  }
})
