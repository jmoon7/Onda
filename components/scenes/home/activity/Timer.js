import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, AsyncStorage } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BoldText from '../../../text/BoldText';
import LightText from '../../../text/LightText';
import { primaryColor } from '../../../Color';
import FinishedAnimation from './FinishedAnimation';
import { durationParse } from '../../../Util';

export default class Timer extends Component {
	constructor(props) {
		super(props);
		const { durationInSec } = this.props;
		this.state = { 
			time: durationInSec,
			timer: null,
			paused: true,
			// timeBarWidth: new Animated.Value(300),
			// timeBarAnimation: null
		};
		this.handlePlayAndPause = this.handlePlayAndPause.bind(this);
		this.handleRestart = this.handleRestart.bind(this);

	}

	componentDidMount() {
		this.handleRestart();
	}

	componentWillUnmount() {
		if (this.state.timer !== null) BackgroundTimer.clearTimeout(this.state.timer);
	}

  async updateStorageActivityTime(key) {
    try {
      let data = await AsyncStorage.getItem('@OndaStore:activities');
      if (data != null) {
	      data = JSON.parse(data);
	      data = data.map(item => {
	      	if (item.key === key) item.timeSpent += 1;
	      	return item;
	      });
	      await AsyncStorage.setItem('@OndaStore:activities', JSON.stringify(data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async addStorageDiaryEntry() {
  	const { durationInSec, title, category } = this.props;
  	try {
			const newData = {
				title: title,
				category: category,
				durationInSec: durationInSec,
				time: Date.now()
			};
  		let data = await AsyncStorage.getItem('@OndaStore:diary');
  		data = JSON.parse(data);
  		if (data != null) {
		    data.unshift(newData);
  		} else {
  			data = [newData];
  		}
  		await AsyncStorage.setItem('@OndaStore:diary', JSON.stringify(data));
  	} catch (error) {
  		console.log(error);
  	}
  }

	handleRestart() {
		const { itemKey, durationInSec } = this.props;
		if (this.state.timer !== null) BackgroundTimer.clearTimeout(this.state.timer);
		this.setState({ 
			time: durationInSec,
			timer: BackgroundTimer.setInterval(() => {
				if (!this.state.paused) {
					if (this.state.time === 0) {
						BackgroundTimer.clearTimeout(this.state.timer);
						this.setState({ paused: true });
						this.addStorageDiaryEntry();
					} else {
						this.setState({ time: this.state.time - 1 });
						this.updateStorageActivityTime(itemKey);
					}
				}
			}, 1000),
			paused: true,
			// timeBarWidth: new Animated.Value(300),
			// timeBarAnimation: Animated.timing(this.state.timeBarWidth, { toValue: 0, durationInSec: durationInSec * 60 * 1000 }) 
		});
	}

	handlePlayAndPause() {
		if (this.state.paused) {
			// this.state.timeBarAnimation.start();
			this.setState({ paused: false });
		} else {
	    // this.state.timeBarAnimation.stop();
			this.setState({ paused: true });
		}
	}

	render() {
		let body = (this.state.time > 0) ? durationParse(this.state.time) : <FinishedAnimation/>;
		return (
      <View style={styles.container}>
				<BoldText style={{color: 'white', fontSize: 35}}> { body } </BoldText>

				<View style={styles.playOptions}>
					<TouchableOpacity onPress={this.handlePlayAndPause}>
	          <Icon name={(this.state.paused) ? 'play-arrow' : 'pause'} size={35} color='white' style={styles.playOption}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.handleRestart}>
	          <Icon name='refresh' size={35} color='white' style={styles.playOption}/>
					</TouchableOpacity>
				</View>

			</View>
		);
	}
}
				// <Animated.View style={{width: this.state.timeBarWidth, backgroundColor: 'white', height: 5, margin: 20}}/>

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	playOptions: {
		flexDirection: 'row',
	},
	playOption: {
		margin: 5
	}
});