import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
import Button from '../../Components/Button/Button';
import AsyncStorage from '@react-native-community/async-storage';
const {container, headingtext, buttonStyle, register} = Style;

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassowrd: '',
    };
  }
  registerUser = async () => {
    await AsyncStorage.setItem('@Email', this.state.email);
    await AsyncStorage.setItem('@Password', this.state.password);
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <SafeAreaView>
        <View style={[container]}>
          <View style={{height: '20%'}}>
            <Text style={[headingtext]}> SIGN UP</Text>
          </View>
          <View>
            <Textinput
              value={this.state.email}
              KeyBoardType="email-address"
              Title="Email"
              onChangeText={(text) => this.setState({email: text})}
            />
            <Textinput
              value={this.state.password}
              Title="Password"
              onChangeText={(text) => this.setState({password: text})}
            />
            <Textinput
              value={this.state.confirmPassowrd}
              Title="Confirm Password"
              onChangeText={(text) => this.setState({confirmPassowrd: text})}
            />
          </View>
          <View style={{height: '40%', marginTop: height(10), width: '100%'}}>
            <Button Buttontext="SignUp" onclick={() => this.registerUser()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
