import React, { Component } from 'react';
import { Text } from 'react-native';

export default class LightText extends Component {
  render() {
    return (
      <Text style={{fontFamily: 'AvenirLight', margin: 10, color: 'black', ...this.props.style}}> 
        { this.props.children } 
      </Text>
    );  
  }
}