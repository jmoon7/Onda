import React, { Component } from 'react';
import { Text } from 'react-native';

export default class BoldText extends Component {
  render() {
    return (
      <Text style={{fontFamily: 'AvenirBook', margin: 10, color: 'black', ...this.props.style}}> 
        { this.props.children } 
      </Text>
    );  
  }
}