import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialIcons';
import LightText from '../../text/LightText';
import BoldText from '../../text/BoldText';
import { primaryColor } from '../../Color';
import { durationParse, categoryColors, categoryIcons, categories, initialData } from '../../Util';

export default class ActivityStats extends Component {
  constructor() {
    super();
    this.state = { dataBySection: this.organizeBySection(initialData) };
  }  

  componentDidMount() {
    this.fetchActivitiesFromStorage();
    setInterval(() => this.fetchActivitiesFromStorage(), 1000);
  }

  async fetchActivitiesFromStorage() {
    try {
      // await AsyncStorage.removeItem('@OndaStore:activities');
      let data = await AsyncStorage.getItem('@OndaStore:activities');
      data = JSON.parse(data);
      console.log(data);
      if (data !== null) {
        const dataBySection = this.organizeBySection(data);
        this.setState({ dataBySection });
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  }

  organizeBySection(data) {
    let dataBySectionObject = {};
    categories.forEach(category => dataBySectionObject[category] = []);
    data.forEach(item => {
      dataBySectionObject[item.category].push(item);
    });
    let dataBySectionList = categories.map(category => { 
      return { data: dataBySectionObject[category], title: category };
    });
    return dataBySectionList;
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.dataBySection}
          extraData={this.state}
          keyExtractor={(item) => item.key}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.section}>
                <Icon name={categoryIcons[section.title]} size={20} color={categoryColors[section.title]}/>
                <BoldText style={{fontSize: 20, color: categoryColors[section.title]}}> 
                  {section.title} 
                </BoldText>
              </View>
            );
          }}
          renderItem={({item, index}) => {
            return (
              <View style={styles.item}>
                <View style={{backgroundColor: categoryColors[item.category], borderRadius: 5}}>
                  <BoldText style={{fontSize: 15, color: 'white'}}> { item.title } </BoldText>
                </View>
                <LightText> { durationParse(item.timeSpent) } </LightText>
              </View>
            ); 
          }}
        />
      </View>
    );  
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  section: {
    padding: 3,
    flexDirection: 'row'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  }
});

