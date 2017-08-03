import React, { Component } from 'react';
import { LinearGradient, View, TouchableOpacity, Text, UIManager, LayoutAnimation, 
  Dimensions, TextInput, Switch, Slider, Picker, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LightText from '../../../text/LightText';
import { primaryColor, secondaryColor, blackColor, whiteColor } from '../../../Color';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SpringAnimation = {
  duration: 500,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    type: LayoutAnimation.Types.spring,
  },
};

export default class NewFloatingActionButton extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = { 
      new: false,
      inputTitle: '',
      inputCategory: '',
      inputDuration: 0,
      inputAlarm: false,
      inputAirplaneMode: false 
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleOpen() {
    this.props.handleFabOpen();
    LayoutAnimation.configureNext(SpringAnimation);
    this.setState({ new: true });
  }
  
  handleClose() {
    LayoutAnimation.configureNext(SpringAnimation);
    this.setState({ new: false });
  }

  handleSave() {
    const { inputTitle, inputCategory, inputDuration, inputAlarm, inputAirplaneMode } = this.state;
    if (inputTitle.length === 0 || inputCategory.length === 0 || inputDuration === 0) {
      ToastAndroid.showWithGravity('Fill out the form!', ToastAndroid.SHORT, ToastAndroid.CENTER);
    } else {
      this.handleClose();
      const data = {
        key: Date.now(), 
        title: this.state.inputTitle,
        category: this.state.inputCategory,
        duration: this.state.inputDuration,
        alarm: this.state.inputAlarm,
        airplaneMode: this.state.inputAirplaneMode
      };
      this.props.handleSave(data);
      this.setState({
        inputTitle: '',
        inputCategory: '',
        inputDuration: 0,
        inputAlarm: false,
        inputAirplaneMode: false 
      });
    }
  }

  render() {
    let body;
    if (!this.state.new) {
    	animateBox = { ...animateBox, height: 50, width: 50 };
      body = (
        <TouchableOpacity style={{flex:1, justifyContent: 'center', alignItems: 'center'}} onPress={this.handleOpen} >
          <Icon name='add' size={25} color='white'/>
        </TouchableOpacity>
      );
    } else {
    	animateBox = { ...animateBox, height: screenHeight - 150, width: screenWidth - 40 };
      body = (
      	<View style={{flex: 1, justifyContent: 'space-between', padding: 30}}>
	        <TouchableOpacity onPress={this.handleClose}>
	          <Icon name='close' size={25} color='white'/>
	        </TouchableOpacity>

      		<LightText style={{color:'white', fontSize: 30}}> 
      			New Activity 
      		</LightText>

      		<LightText style={{color:'white', fontSize: 20}}> 
	          <Icon name='mode-edit' size={20} color='white'/>  Title
      		</LightText>
      		<TextInput
	      		placeholder='Name your activity!'
	      		placeholderTextColor='white'
      			underlineColorAndroid='white'
            autoCapitalize='sentences'
            autoCorrect={true}
            onChangeText={(text) => this.setState({ inputTitle: text})}
      			style={{color: 'white'}}
      		/>

      		<LightText style={{color:'white', fontSize: 20}}> 
	          <Icon name='layers' size={20} color='white'/>  Catergory
      		</LightText>
      		<Picker
            selectedValue={this.state.inputCategory}
            onValueChange={(value) => this.setState({inputCategory: value})}
            style={{color:'white'}}
          >
					  <Picker.Item label='Social' value='social'/>
					  <Picker.Item label='Exercise & Sport' value='physical'/>
            <Picker.Item label='Literature' value='literature'/>
            <Picker.Item label='Arts' value='arts'/>
            <Picker.Item label='Cooking' value='cooking'/>
					</Picker>

      		<LightText style={{color:'white', fontSize: 20}}> 
	          <Icon name='timer' size={20} color='white'/>  Duration
      		</LightText>
      		<Slider
            minimumValue={0}
            maximumValue={300}
            step={30}
            onSlidingComplete={(value) => this.setState({inputDuration: value})}
          />

      		<LightText style={{color:'white', fontSize: 20}}> 
	          <Icon name='notifications' size={20} color='white'/>  Alarm when over
      		</LightText>
      		<Switch
            onValueChange={(value) => this.setState({inputAlarm: value})}
            value={this.state.inputAlarm}
          />

      		<LightText style={{color:'white', fontSize: 20}}> 
	          <Icon name='local-airport' size={20} color='white'/>  Airplane mode
      		</LightText>
      		<Switch
            onValueChange={(value) => this.setState({inputAirplaneMode: value})}
            value={this.state.inputAirplaneMode}
          />

          <TouchableOpacity onPress={this.handleSave}>
            <LightText style={{color:'white'}}> Save </LightText>
          </TouchableOpacity>

        </View>
      );
    }

    return (
	    <View style={animateBox} elevation={5}>
	      { body }
	    </View>
    );  
  }
}

let animateBox = {  
	flex: 1,
	position: 'absolute', 
	bottom: 20, 
	right: 20,
  borderRadius: 50,
  backgroundColor: primaryColor,
};