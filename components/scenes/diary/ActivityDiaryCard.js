import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import LightText from '../../text/LightText';
import BoldText from '../../text/BoldText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { durationParse, categoryIcons, categoryColors } from '../../Util';

const screenWidth = Dimensions.get('window').width;

const dateParse = (time) => {
	const date = new Date(time);
	return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + ' ' + 
		date.getHours() + ':' + date.getMinutes();
}

export default class ActivityDiaryCard extends Component {
  render() {
  	const { title, category, durationInSec, time } = this.props.item;
    return (
    	<View style={styles.container} elevation={2}>
    		<View style={styles.header}>
          <Icon name={categoryIcons[category]} size={20} color={categoryColors[category]}/>
		    	<BoldText style={{fontSize: 20}}> {title} </BoldText>
	    	</View>
	    	<LightText style={{marginTop: 10, color: 'grey'}}> {dateParse(time)} </LightText>
	    	<LightText style={{marginTop: 10, color: 'grey'}}> Duration: {durationParse(durationInSec)} </LightText>
	    	<LightText style={{marginTop: 10, color: 'grey'}}> Category: {category} </LightText>

    	</View>
    );	
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		margin: 10,
		padding: 20,
		borderRadius: 10,
		width: screenWidth - 60
	},
	header: {
		flexDirection: 'row'
	}
})
