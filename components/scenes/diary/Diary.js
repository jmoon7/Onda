import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, AsyncStorage } from 'react-native';
import BoldText from '../../text/BoldText';
import LightText from '../../text/LightText';
import ActivityDiaryCard from './ActivityDiaryCard';
import { primaryColor } from '../../Color';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default class Diary extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    // this.debug_clearDiary();
    this.fetchDiaryFromStorage();
    setInterval(() => this.fetchDiaryFromStorage(), 1000);
  }
  
  async debug_clearDiary() {
    await AsyncStorage.removeItem('@OndaStore:diary');
  }

  async fetchDiaryFromStorage() {
    try {
      let data = await AsyncStorage.getItem('@OndaStore:diary');
      data = JSON.parse(data);
      if (data !== null) this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.intro}>
          <BoldText style={{fontSize: 30}}> Your <Text style={{color:primaryColor}}>Diary</Text> </BoldText>
        </View>
        <View style={styles.list}>
  	    	<FlatList
  				  data={this.state.data}
  				  renderItem={({item}) => <ActivityDiaryCard item={item}/> }
            keyExtractor={(item) => item.time}
  				/>
        </View>
    	</View>
    );	
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  intro: {
    margin: 20,
    alignItems: 'flex-start',
  },
  list: {
    flex: 1,
    padding: 20
  },
})
