import React, { Component } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Animated, Easing } from 'react-native';
import ActivityPickerTop from './ActivityPickerTop';
import ActivityPickerCard from './ActivityPickerCard';
import NewActivityForm from './NewActivityForm';

export default class ActivityPicker extends Component {
  constructor() {
    super();
    this.state = {
      animY: new Animated.Value(2000),
      data: [
        {key: 'cycling', title: 'Cycling', body: 'Going cycling in the nearby mountain.'}, 
        {key: 'read', title: 'Read', body: 'Going cycling in the nearby mountain.'}, 
        {key: 'walk', title: 'Take a walk', body: 'Going cycling in the nearby mountain.'}, 
        {key: 'huh', title: 'Huh', body: 'Going cycling in the nearby mountain.'}, 
      ],
      pressedAdd: false
    };
    this.handleRemove = this.handleRemove.bind(this); 
    this.handleAdd = this.handleAdd.bind(this); 
    this.keyExtractor = this.keyExtractor.bind(this); 
  }

  componentDidMount() {
    this.animateLoad();
  }

  animateLoad() {
    Animated.timing(
      this.state.animY, { toValue: 0, duration: 1000, easing: Easing.bezier(0, 0, 0, 1) }
    ).start();
  }

  handleAdd() {
    this.setState({ pressedAdd: true });
  }

  handleAddCallback() {
    const exampleNewData = {key: Math.random(1000), title: Math.random(1000), body: 'Going cycling in the nearby mountain.'}
    const updated = this.state.data.slice();
    updated.unshift(exampleNewData);
    this.setState({
      data: updated
    });
  }

  handleRemove(key) {
    const updated = this.state.data.filter(item => {
      return (item.key == key) ? false : true
    });
    this.setState({
      data: updated
    });
  }

  keyExtractor(item, index) {
    return index;
  }

  render() {
    if (this.state.pressedAdd) return <NewActivityForm/>;
    return (
      <View style={styles.container}>
        <Animated.View style={{transform: [{translateY: this.state.animY}]}}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => <ActivityPickerCard item={item} index={index} handleRemove={this.handleRemove}/> }
            ListHeaderComponent={<ActivityPickerTop handleAdd={this.handleAdd}/>}
          />
        </Animated.View>
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
