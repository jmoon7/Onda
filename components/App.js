import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Tutorial from './tutorial/Tutorial';
// import Navigator from './scenes/Navigator';
import Navigator from './scenes/NavigatorTab';

export default class App extends Component {
	constructor() {
		super();
		this.state = { tutorial: false };
		this.handleSkip = this.handleSkip.bind(this);
	}

	handleSkip() {
		this.setState({ tutorial: false });		
	}

  render() {
  	if (this.state.tutorial) return <Tutorial handleSkip={this.handleSkip}/>;
     return <Navigator/>;
  }
}

const styles = StyleSheet.create({
});
