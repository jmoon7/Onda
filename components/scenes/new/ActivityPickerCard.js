import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegularText from '../texts/RegularText';
import BoldText from '../texts/BoldText';

export default class ActivityPickerCard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      anim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.anim, {
      toValue: 1,
      duration: 700,
    }).start();
  }

  handleRemove(index) {
    const handleRemove = this.props.handleRemove;
    if (handleRemove) {
      Animated.timing(this.state.anim, {
        toValue: 0,
        duration: 300,
      }).start(() => handleRemove(index));
    }
  }

  render() {
    const index = this.props.index;
    const { title, body, image } = this.props.item;
    const animStyle = [
      // { opacity: this.state.anim },
      { height: this.state.anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 170],
          extrapolate: 'clamp',
        }),
      },
    ];
    return (
      <Animated.View style={animStyle}>
        <View style={styles.card} elevation={5}>

          <View style={styles.header}>
            <BoldText style={{fontSize:27}}> {title} </BoldText>
            <TouchableOpacity onPress={() => this.handleRemove(index)}>
              <Icon style={{marginRight: 5}} name="times" size={22} color="black"/>
            </TouchableOpacity>
          </View>

          <RegularText style={{fontSize:15, marginTop: 10}}> {body} </RegularText>
          
          <View style={styles.time}>
            <Icon name="clock-o" size={22} color="grey"/>
            <Text> 1 hour session </Text>
          </View>
        
        </View>
      </Animated.View>
    );	
  }
}
const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 150,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 5
  }
});
