import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SlideRightTransition from './SlideRightTransition';
import Icon from 'react-native-vector-icons/FontAwesome';
// import LinearGradient from 'react-native-linear-gradient';
import Diary from './diary/Diary';
import Profile from './profile/Profile';
import Home from './home/Home'

import { blackColor } from '../Color';

const screenWidth = Dimensions.get('window').width;

const homeStyle = ({navigation}) => ({
	title: <Icon name="hand-spock-o" size={20} color="black"/>,
	headerLeft: (
		<TouchableOpacity onPress={() => navigation.navigate('Diary')}>
			<Icon name="book" size={20} color="black" style={{marginLeft:20}}/>
		</TouchableOpacity>
	),
	headerRight: (
		<TouchableOpacity onPress={() => navigation.navigate('Profile')}>
			<Icon name="user" size={20} color="black" style={{marginRight:20}}/>
		</TouchableOpacity>
	),
	headerTintColor: 'black',
	headerTitleStyle: {
		textAlign: 'center',
		alignSelf: 'center'
	}
});

const diaryStyle = ({navigation}) => ({
	title: <Icon name="hand-spock-o" size={20} color="black"/>,	
	headerLeft: <Text/>,
	headerRight: (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-right" size={20} color="black" style={{marginRight:20}}/>
		</TouchableOpacity>
	),
	headerTintColor: 'black',
	headerTitleStyle: {
		textAlign: 'center',
		alignSelf: 'center'
	}
});

const profileStyle = ({navigation}) => ({
	title: <Icon name="hand-spock-o" size={20} color="black"/>,	
	headerLeft: (
		<TouchableOpacity onPress={() => navigation.goBack()}>
			<Icon name="angle-left" size={20} color="black" style={{marginLeft:20}}/>
		</TouchableOpacity>
	),
	headerRight: (
		<TouchableOpacity onPress={() => navigation.navigate('Home')}>
			<Icon name="cog" size={20} color="black" style={{marginRight:20}}/>
		</TouchableOpacity>
	),
	headerTintColor: 'black',
	headerTitleStyle: {
		textAlign: 'center',
		alignSelf: 'center'
	}
});

const StackNavigation = StackNavigator({
	Home: {
		screen: Home,
  	navigationOptions: homeStyle
	},
	Diary: { 
		screen: Diary,
  	navigationOptions: diaryStyle
	},
	Profile: { 
		screen: Profile,
  	navigationOptions: profileStyle
	}
}, {
	transitionConfig: SlideRightTransition,
	tabBarOptions: {
		style: { 
			width: screenWidth,
		}
	}
});

export default class Navigator extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					translucent={true}
		    	backgroundColor='black'
		    	barStyle='light-content'
				/>
				<StackNavigation style={{width:screenWidth}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  }
});
