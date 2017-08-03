import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header'

export default class Stats extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <Header title='Stats'/>
    	</View>
    );	
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
