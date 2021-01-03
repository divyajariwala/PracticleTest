import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
import Button from '../../Components/Button/Button';
const {container, headingtext, buttonStyle, register, registerText} = Style;
export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View style={[container]}>
          <View style={{height: '20%'}}>
            <Text style={[headingtext]}> SIGN IN</Text>
          </View>
          <View>
            <Textinput
              value={this.state.email}
              KeyBoardType="email-address"
              Title="Email"
              onChangeText={(text) => this.setState({email: text})}
            />
            <Textinput
              value={this.state.email}
              KeyBoardType="email-address"
              Title="Email"
              onChangeText={(text) => this.setState({email: text})}
            />
          </View>
          <View style={{height: '40%', marginTop: height(10), width: '100%'}}>
            {/* <TouchableOpacity
              style={[buttonStyle]}
              onPress={() => this.props.navigation.navigate('homescreen')}>
              <Text>Login</Text>
            </TouchableOpacity> */}
            <Button
              Buttontext="Login"
              onclick={() => this.props.navigation.navigate('homescreen')}
            />

            <TouchableOpacity
              style={[register]}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={[registerText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
