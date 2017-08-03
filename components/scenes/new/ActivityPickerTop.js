import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegularText from '../texts/RegularText';
import BoldText from '../texts/BoldText';
import ActivityPicker from './ActivityPicker';
import Header from '../Header';

export default class ActivityPickerTop extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      animOpacity: new Animated.Value(0),
      animBounce: new Animated.Value(0.1)
    };
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.animOpacity, { toValue: 1, duration: 1000 }),
      Animated.spring(this.state.animBounce, { toValue: 1, tension: 40, friction: 1 })
    ]).start();
  }

  render() {
    return (
    	<View style={styles.container}>

        <View style={styles.header} elevation={1}>
          <Animated.View style={{opacity: this.state.animOpacity}}>
            <RegularText style={{fontSize: 20, color: 'white'}}> 
              What would you like to do? 
            </RegularText>
          </Animated.View>
        </View>
      
        <View style={{margin:10}}>
          <Animated.View  style={{transform: [{scale: this.state.animBounce}]}}>
            <TouchableOpacity onPress={this.props.handleAdd}>
              <Icon name="plus" size={30} color="white"/>
            </TouchableOpacity>
          </Animated.View>
        </View> 
      
      </View>
    );	
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    margin: 20,
  }
})
