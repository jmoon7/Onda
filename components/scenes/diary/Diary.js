import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import BoldText from '../../text/BoldText';
import LightText from '../../text/LightText';
import ActivityDiaryCard from './ActivityDiaryCard';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default class Diary extends Component {
  render() {
  	const exampleData = [
  		{key: '1', title: 'Activity 1', date: 'August 18th, 2017', body: loremIpsum}, 
  		{key: '2', title: 'Activity 2', date: 'August 17th, 2017', body: loremIpsum},
  		{key: '3', title: 'Activity 3', date: 'August 15th, 2017', body: loremIpsum},
  		{key: '4', title: 'Activity 4', date: 'August 10th, 2017', body: loremIpsum},
  	];
    return (
    	<View style={styles.container}>
        <View style={styles.intro}>
          <BoldText style={{fontSize: 30}}> Hey! </BoldText>
          <LightText style={{fontSize: 20}}> This is what you've been doing. </LightText>

        </View>

	    	<FlatList
				  data={exampleData}
				  renderItem={({item}) => <ActivityDiaryCard item={item}/> }
				/>
    	</View>
    );	
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center'
	},
  intro: {
    alignItems: 'flex-start',
    margin: 10
  }
})
