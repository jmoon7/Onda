import React, { Component } from 'react';
import { StyleSheet, UIManager, LayoutAnimation, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import { primaryColor } from '../../../Color';

export default class FinishedAnimation extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = { load: false }
  }

  componentDidMount() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ load: true });
  }
  
  render() {
    let scaleStyle = (this.state.load) ? { transform: [{ scale: 1 }] } : { transform: [{ scale : 5 }] };
    return (
      <Text style={scaleStyle}> Finished! </Text>
    );
  }
}
