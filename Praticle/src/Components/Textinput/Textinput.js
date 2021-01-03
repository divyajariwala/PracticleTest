import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import Styles from './Style';
import { width, height, totalSize } from 'react-native-dimension';
const {defaultStyle, containerStyle} = Styles;

const Textinput = (props) => {
  return (
    <View>
      <TextInput
        placeholder={props.Title}
        placeholderTextColor="#B4B4B4"
        value={props.value}
        keyboardType={props.KeyBoardType}
        style={[defaultStyle]}
        secureTextEntry={props.SecureTextEntry}
        onChangeText={(text) => props.onChangeText(text)}
      />
    </View>
  );
};

export default Textinput;
