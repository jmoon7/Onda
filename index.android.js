import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import App from './components/App'

export default class onda extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('onda', () => onda);
