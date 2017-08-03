import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Animated } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BoldText from '../../../text/BoldText';
import LightText from '../../../text/LightText';
import { primaryColor } from '../../../Color';
import FinishedAnimation from './FinishedAnimation';

const durationParse = (time) => {
	const sec = Math.floor(time % 60);
	time /= 60;
	const min = Math.floor(time % 60);
	time /= 60;
	const hours = Math.floor(time % 24);
  let string = '';
  if (hours !== 0) string += hours + 'h ';
  if (min !== 0) string += min + 'm ';
  if (sec !== 0) string += sec + 's'
  return string;
}

export default class ActivityScreen extends Component {
	constructor(props) {
		super(props);
		const { duration } = this.props.navigation.state.params;
		this.state = { 
			time: duration * 60,
			timer: null,
			paused: true,
			timeBarWidth: new Animated.Value(300),
			timeBarAnimation: null
		};
		Animated.timing(this.state.timeBarWidth, { toValue: 0, duration: duration * 60 * 1000 }).start(); 

		this.handlePlayAndPause = this.handlePlayAndPause.bind(this);
		this.handleRestart = this.handleRestart.bind(this);

	}
	componentDidMount() {
		this.handleRestart();
	}

	handlePlayAndPause() {
		if (this.state.paused) {
			this.state.timeBarAnimation.start();
			this.setState({ paused: false });
		} else {
	    this.state.timeBarAnimation.stop();
			this.setState({ paused: true });
		}
	}

	handleRestart() {
		const { duration } = this.props.navigation.state.params;
		if (this.state.timer !== null) BackgroundTimer.clearTimeout(this.state.timer);
		this.setState({ 
			timer: BackgroundTimer.setInterval(() => {
				if (!this.state.paused) {
					if (this.state.time < 1) BackgroundTimer.clearTimeout(this.state.timer);
					this.setState({ time: this.state.time - 1 });
				}
			}, 1000),
			paused: true,
			timeBarWidth: new Animated.Value(300),
			timeBarAnimation: Animated.timing(this.state.timeBarWidth, { toValue: 0, duration: duration * 60 * 1000, useNativeDriver: true }) 
		});
	}

	render() {
		const { key, title, category, duration, alarm, airplaneMode } = this.props.navigation.state.params;
		let body = (this.state.time > 0) ? durationParse(this.state.time) : <FinishedAnimation/>;
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
					
					<BoldText style={{color: 'white', fontSize: 35}}> { body } </BoldText>
					<Animated.View style={{width: this.state.timeBarWidth, backgroundColor: 'white', height: 5, margin: 20}}/>

					<View style={styles.playOptions}>
						<TouchableOpacity onPress={this.handlePlayAndPause}>
		          <Icon name={(this.state.paused) ? 'play-arrow' : 'pause'} size={35} color='white' style={styles.playOption}/>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.handleRestart}>
		          <Icon name='refresh' size={35} color='white' style={styles.playOption}/>
						</TouchableOpacity>
					</View>

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
	playOptions: {
		flexDirection: 'row',
	},
	playOption: {
		margin: 5
	}
});