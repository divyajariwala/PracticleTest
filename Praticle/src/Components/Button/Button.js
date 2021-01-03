import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from './Style';
const {MainContainer, buttonText} = Styles;
const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[MainContainer]}
        onPress={() => props.onclick()}>
        <Text style={[buttonText]}>{props.Buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
