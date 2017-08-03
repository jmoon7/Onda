import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class ProfileImage extends Component {
  render() {
    return (
        <Image
          source={{uri: 'https://i2.cdn.turner.com/cnnnext/dam/assets/140926165711-john-sutter-profile-image-large-169.jpg'}}
		  style={{height: 100, width: 100}}
		  borderRadius={100}
        />
    );	
  }
}