import React, { Component } from 'react';
import { StyleSheet, UIManager, LayoutAnimation, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import LightText from '../../../text/LightText';
import { primaryColor } from '../../../Color';
import { durationParse, categoryColors, categoryIcons } from '../../../Util';

export default class ActivitiesList extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = { index: -1 }
    this.handleUnfocus = this.handleUnfocus.bind(this);
  }

  handleFocus(index) {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ index: index });
  }

  handleUnfocus() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ index: -1 });
  }

  handleDelete(index) {
    this.handleUnfocus();
    this.props.handleDelete(index);
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state.index}
        keyExtractor={(item) => item.key}
        renderItem={({item, index}) => {
          let animateActivity, body;
          if (this.state.index === index) {
            animateActivity = { margin: 20 };
            body = (
              <View style={styles.info}>
                <TouchableOpacity onPress={() => this.handleDelete(index)}>
                  <Icon name='times' size={20} color={primaryColor}/>
                </TouchableOpacity>
                <Text> Category: {item.category} </Text>
                <IconM name={(item.alarm) ? 'notifications' : 'notifications-off' } size={20}/>
                <IconM name={(item.airplaneMode) ? 'airplanemode-active' : 'airplanemode-inactive'} size={20}/>
                <TouchableOpacity style={styles.start} onPress={() => this.props.handleNewActivity(item)}>
                  <Text style={styles.startText}> start </Text>
                </TouchableOpacity>
              </View>
            );
          } else {
            animateActivity = { margin: 0 };
            body = null;
          }
          return (
            <TouchableOpacity onPress={() => this.handleFocus(index)}>
              <View style={animateActivity}>
                <View style={styles.activity} elevation={1}>
                  <View style={styles.header}>
                    <View style={styles.row}>
                      <Icon name={categoryIcons[item.category]} size={22} color={categoryColors[item.category]}/>
                      <LightText style={{fontSize:20, color:'black', width: 200}}> {item.title} </LightText>
                    </View>
                    <View style={styles.row}>
                      <IconM name='timer' size={20}/>
                      <Text> {durationParse(item.duration * 60)} </Text>
                    </View>
                  </View>
                  { body }
                </View>
              </View>
            </TouchableOpacity>
          ); 
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  activity: {
    padding: 20,
    margin: 3,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  start: {
    backgroundColor: primaryColor,
    borderRadius: 5,
    padding: 5
  },
  startText: {
    color: 'white'
  },
  row: {
    flexDirection: 'row'
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
