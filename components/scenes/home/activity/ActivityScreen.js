import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BoldText from '../../../text/BoldText';
import LightText from '../../../text/LightText';
import { primaryColor } from '../../../Color';
import Timer from './Timer';

export default class ActivityScreen extends Component {

	render() {
		const { key, title, category, duration, alarm, airplaneMode } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				
				<TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Icon name='close' size={25} color='white'/>
        </TouchableOpacity>
        
        <View style={styles.content}>
					<BoldText style={{color: 'white', fontSize: 30, textAlign: 'center'}}> { title } </BoldText> 
					<LightText style={{color: 'white', fontSize: 15}}> { category } </LightText> 
					<LightText style={{color: 'white', fontSize: 15}}> { alarm } </LightText> 
					<LightText style={{color: 'white', fontSize: 15}}> { airplaneMode } </LightText>
					
					<Timer itemKey={key} durationInSec={duration * 60} title={title} category={category}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: primaryColor
	},
	content: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
});