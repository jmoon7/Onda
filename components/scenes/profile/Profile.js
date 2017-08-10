import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LightText from '../../text/LightText';
import BoldText from '../../text/BoldText';
import ProfileImage from './ProfileImage';
import { primaryColor } from '../../Color';
import ActivityStats from './ActivityStats';

export default class Profile extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.intro}>
          <BoldText style={{fontSize: 30}}> Your <Text style={{color:primaryColor}}>Profile</Text> </BoldText>
        </View>
        <BoldText style={{fontSize: 20, textAlign: 'center'}}> Activity Stats </BoldText>
        <ActivityStats/>
      </View>
    );  
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
  intro: {
    margin: 20,
    alignItems: 'flex-start',
  },
})
