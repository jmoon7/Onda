import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import LightText from '../text/LightText'
import Diary from './diary/Diary';
import Profile from './profile/Profile';
import Home from './home/Home'

import { primaryColor } from '../Color';

const screenWidth = Dimensions.get('window').width;

const TabNavigation = TabNavigator({
		Diary: { 
			screen: Diary,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name='book' size={20} color={tintColor}/>
			}
		},
		Home: { 
			screen: Home,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name='home' size={20} color={tintColor}/>
			}
		},
		Profile: { 
			screen: Profile,
			navigationOptions: {
				tabBarIcon: ({ tintColor }) => <Icon name='user' size={20} color={tintColor}/>
		  }
		},
	}, {
		tabBarOptions: {
			activeTintColor: primaryColor,
			inactiveTintColor: 'black',
			showIcon: true,
			showLabel: false,
			indicatorStyle: {
				display: 'none',
			},
			style: { 
				width: screenWidth,
				backgroundColor: 'white',
				borderBottomWidth: 1,
				borderBottomColor: 'lightgrey'
			},
		},
		initialRouteName: 'Home'
	}
);

export default class Navigator extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={{backgroundColor: 'white', paddingTop: 15}}> 
					<LightText style={{textAlign: 'center', fontSize: 20, margin: 0}}> 
						onda
					</LightText>
				</View>
				<TabNavigation/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  }
});
