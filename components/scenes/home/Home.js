import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import BoldText from '../../text/BoldText';
import LightText from '../../text/LightText';
import { primaryColor } from '../../Color';
import MainScreen from './main/MainScreen';
import ActivityScreen from './activity/ActivityScreen';

const screenWidth = Dimensions.get('window').width;

const StackNavigation = StackNavigator({
  Main: { 
  	screen: MainScreen,
  	navigationOptions: {
			header: <View/>
  	}
  },
  Activity: {
  	screen: ActivityScreen,
  	navigationOptions: {
			header: <View/>
  	}
  }
}, {
	tabBarOptions: {
		style: { 
			width: screenWidth,
		}
	},
});

export default class Home extends Component {
	render() {
		return <StackNavigation style={{width:screenWidth}}/>
	}
}