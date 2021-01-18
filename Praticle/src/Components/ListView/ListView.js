import React from 'react';
import {View, Text, Image} from 'react-native';
import {height, width} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import profile from '../../../Assets/avtar.png';
import user from '../../../Assets/user.png';
import Style from './Style';
const {textStyle} = Style;
const ListView = (props) => {
  return (
    <TouchableOpacity onPress={() => props.editDetails()}>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '25%'}}>
          <Image
            source={user}
            resizeMode="contain"
            style={{
              width: width(15),
              height: height(15),
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: height(2),
            }}></Image>
        </View>
        <View style={{width: '75%', justifyContent: 'center'}}>
          <Text style={[textStyle]}>{props.data.item.name}</Text>
          <Text style={[textStyle]}>{props.data.item.email}</Text>
          <Text style={[textStyle]}>{props.data.item.phonenumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListView;
