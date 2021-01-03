import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import {FlatList} from 'react-native-gesture-handler';
import ListView from '../../Components/ListView/ListView';
const Data = [
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Test', email: 'Test@gmail.com', phonenumber: '9183692844'},
];
export default class ContactPage extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: totalSize(3),
            justifyContent: 'center',
            textAlign: 'center',
            marginTop: height(3),
          }}>
          Contact List
        </Text>
        <FlatList
          data={Data}
          style={{marginBottom: height(10)}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data, item) => {
            return (
              <ListView
                data={data}
                editDetails={() =>
                  this.props.navigation.navigate('editdetails')
                }
              />
            );
          }}
        />
      </View>
    );
  }
}
