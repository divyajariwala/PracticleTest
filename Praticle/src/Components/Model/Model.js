import React, {Component} from 'react';
import Modal from 'react-native-modal';

import {View, Text, TouchableOpacity} from 'react-native';

const Model = (props) => {
  return (
    <View>
      <Modal isVisible={props.visible} >
        <View  style={{height: '50%'}}>
          <TouchableOpacity onPress={() => props.selectLibrary()}>
            <Text style={{color: 'white', marginTop: 3}}>
              Choose from the Library{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.selectCamera()}>
            <Text style={{color: 'white', marginTop: 3}}>
              Capture from camera
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Model;
