import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
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
              KeyBoardType="email-address"
              Title="Password"
              onChangeText={(text) => this.setState({password: text})}
            />
            <Textinput
              value={this.state.password}
              KeyBoardType="email-address"
              Title="Confirm Password"
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <View style={{height: '40%', marginTop: height(10), width: '100%'}}>
            <TouchableOpacity
              style={[buttonStyle]}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
