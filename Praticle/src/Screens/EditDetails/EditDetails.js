import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
const {container, headingtext, buttonStyle, register} = Style;

export default class EditDetails extends Component {
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
            <Text style={[headingtext]}> EDIT DETAILS</Text>
          </View>
          <View>
            <Textinput
              value={this.state.email}
              KeyBoardType="email-address"
              Title="Name"
              onChangeText={(text) => this.setState({email: text})}
            />
            <Textinput
              value={this.state.password}
              KeyBoardType="email-address"
              Title="Email"
              onChangeText={(text) => this.setState({password: text})}
            />
            <Textinput
              value={this.state.password}
              KeyBoardType="email-address"
              Title="Phone Number"
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <View
            style={{
              height: '40%',
              marginTop: height(10),
            
              alignItems: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={[buttonStyle]}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
