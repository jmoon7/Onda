import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LightText from '../../text/LightText';
import BoldText from '../../text/BoldText';
import ProfileImage from './ProfileImage';
import { primaryColor } from '../../Color';

export default class Profile extends Component {
  render() {
    return (
    	<View style={styles.container}>
        <View style={styles.intro}>
          <BoldText style={{fontSize: 30}}> Your <Text style={{color:primaryColor}}>Profile</Text> </BoldText>
        </View>
	    	<View style={styles.info}>
	    		<ProfileImage/>
	    		<LightText style={{margin: 20, fontSize: 15}}> David Buttface </LightText>
    		</View>
    	</View>
    );	
  }
}
          // <LightText style={{fontSize: 20}}> And some statistics. </LightText>
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
  intro: {
    margin: 20,
    alignItems: 'flex-start',
  },
	info: {
		margin: 10,
		alignItems: 'center'
	}
})
