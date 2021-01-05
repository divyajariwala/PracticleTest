import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
import Button from '../../Components/Button/Button';
const {container, headingtext, buttonStyle, register, registerText} = Style;
import Asyncstorage from '@react-native-community/async-storage';
export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  verifyLogin = async () => {
    if (this.state.email === 'Testcase') {
      await Asyncstorage.setItem('@UserType', '@User1');
      this.props.navigation.navigate('homescreen');
    } else if (this.state.email === 'Testcase2') {
      await Asyncstorage.setItem('@UserType', '@User2');
      this.props.navigation.navigate('homescreen');
    } else {
      alert('Please check your EmailAddress');
    }
  };
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
              value={this.state.password}
              KeyBoardType="email-address"
              Title="Password"
              onChangeText={(text) => this.setState({password: text})}
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
              onclick={() => this.verifyLogin()}
            />

            <TouchableOpacity
              style={[register]}
              // onPress={() => }
              >
              <Text style={[registerText]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
