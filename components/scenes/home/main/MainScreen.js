import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, LayoutAnimation, UIManager, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BoldText from '../../../text/BoldText';
import LightText from '../../../text/LightText';
import { primaryColor } from '../../../Color';
import ActivitiesList from './ActivitiesList';
import NewFloatingActionButton from './NewFloatingActionButton';

const exampleData = [
  {key: 1, title: 'Continue reading East of Eden', icon: 'book', color: 'deepskyblue'},
  {key: 2, title: 'Go Cycling', icon: 'bicycle', color: 'darksalmon'},
  {key: 3, title: 'Hang out with friends', icon: 'group', color: 'mediumturquoise'},
  {key: 4, title: 'Hang out with friends', icon: 'group', color: 'mediumturquoise'},
  {key: 5, title: 'Hang out with friends', icon: 'group', color: 'mediumturquoise'},
  {key: 6, title: 'Hang out with friends', icon: 'group', color: 'mediumturquoise'},
  {key: 7, title: 'Hang out with friends', icon: 'group', color: 'mediumturquoise'},
  {key: 8, title: 'Hang out with friends', icon: 'group', color: 'mediumturquoise'},
];

export default class MainScreen extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = { load: false, data: [] };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFabOpen = this.handleFabOpen.bind(this);
    this.handleNewActivity = this.handleNewActivity.bind(this);
  }

  componentDidMount() {
    this.fetchActivitiesFromStorage();
    setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      this.setState({ load: true });
    });
  }

  async fetchActivitiesFromStorage() {
    try {
      // await AsyncStorage.removeItem('@OndaStore:activities');
      const data = await AsyncStorage.getItem('@OndaStore:activities');
      if (data !== null) this.setState({ data: JSON.parse(data) });
    } catch (error) {
      // Error retrieving data
    }
  }

  async updateStorage(data) {
    try {
      await AsyncStorage.setItem('@OndaStore:activities', JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  }

  handleSave(entry) {
    let data = this.state.data;
    data.unshift(entry);
    console.log(data);
    this.updateStorage(data);
    this.fetchActivitiesFromStorage();
  }

  handleDelete(index) {
    let data = this.state.data;
    data.splice(index, 1);
    this.updateStorage(data);
    this.fetchActivitiesFromStorage();
  }

  handleFabOpen() {
    this.child.handleUnfocus();
  }

  handleNewActivity(item) {
    this.props.navigation.navigate('Activity', item);
  }

  render() {
    
    let animateIntro = this.state.load ? { marginBottom: 0 } : { marginBottom: 100 };
    return (
      <View style={styles.container}>
        <View style={animateIntro}>
          <View style={styles.intro}>
            <BoldText style={{fontSize: 30}}> Hey <Text style={{color:primaryColor}}>Jung Woo</Text>, </BoldText>
            <LightText style={{fontSize: 20}}> What would you like to do today? </LightText>
          </View>
        </View>
        <ActivitiesList 
          ref={instance => {this.child = instance}} 
          data={this.state.data} 
          handleDelete={this.handleDelete}
          handleNewActivity={this.handleNewActivity}
        />
        <NewFloatingActionButton 
          handleSave={this.handleSave} 
          handleFabOpen={this.handleFabOpen}
        />
      </View>
    );  
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  intro: {
    margin: 20,
    alignItems: 'flex-start',
  }
});
