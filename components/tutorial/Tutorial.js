import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, ViewPagerAndroid, TouchableOpacity } from 'react-native';
import LightText from '../text/LightText'

const screenWidth = Dimensions.get('window').width;

export default class Tutorial extends Component {
  constructor() {
    super();
    this.state = { curIndex: 0 };
  }

  handlePageSelected(e) {
    this.setState({ curIndex: e.nativeEvent.position });
  }

  render() {
    let pointStyle = {
      width: 10,
      height: 10,
      borderRadius: 10,
      marginLeft: 5 ,
      marginRight: 5
    };
    const points = [0, 1].map(i => {
      let backgroundColor;
      (i == this.state.curIndex) ? backgroundColor = 'darksalmon' : backgroundColor = 'darkturquoise';
      return <View key={i} style={{...pointStyle, backgroundColor: backgroundColor}}/>
    });

    return (
      <View style={styles.container}>
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          onPageSelected={(e) => this.handlePageSelected(e)}
        >
          <View style={styles.pageStyle}>
            <LightText style={{fontSize: 40}}>
              Heya,
            </LightText>
            <LightText style={{fontSize: 20, textAlign: 'center', color:'grey'}}>
              Let me tell you a little bit about Onda.
            </LightText>
          </View>

          <View style={styles.pageStyle}>
            <LightText style={{fontSize: 40}}>
              Take a time off.
            </LightText>
            <LightText style={{fontSize: 20, textAlign: 'center', color:'grey'}}>
              Onda wants to help you plan your hobbies and pastime activities.
            </LightText>
          </View>
        </ViewPagerAndroid>
        <View style={styles.points}>
          { points }
        </View>
        <TouchableOpacity onPress={this.props.handleSkip}>
          <LightText style={{margin: 50}}> Skip </LightText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewPager: {
    flex: 1,
    width: screenWidth,
  },
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  points: {
    flexDirection: 'row',
  },
  point: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginLeft: 5 ,
    marginRight: 5,
    backgroundColor: 'darkturquoise'
  },
});
