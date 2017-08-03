import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LightText from '../../text/LightText';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ActivityDiaryCard extends Component {
  render() {
  	const item = this.props.item;
    return (
    	<View style={styles.container} elevation={1}>
    		<Image source={{uri:'https://static.pexels.com/photos/287398/pexels-photo-287398.jpeg'}} style={{height: 150}} borderRadius={10}/>
    		<View style={styles.header}>
		    	<LightText style={{fontSize: 20}}> {item.title} </LightText>
		    	<TouchableOpacity>
						<Icon name="pencil" size={20} color="black"/>
					</TouchableOpacity>
				</View>
	    	<LightText style={{marginTop: 10, color: 'grey'}}> {item.date} </LightText>
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
		width: 370,
		borderRadius: 10
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		paddingRight: 10
	}
})
