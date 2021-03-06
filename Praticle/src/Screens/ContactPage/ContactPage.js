import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import ListView from '../../Components/ListView/ListView';
import Asyncstorage from '@react-native-community/async-storage';
const Data = [];
const Data1 = [
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
  {name: 'Testcase', email: 'Test@gmail.com', phonenumber: '9183692844'},
];
export default class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usertype: '',
      userData: [],
    };
  }
  async componentDidMount() {
    this.setState({
      usertype: await Asyncstorage.getItem('@UserType'),
      userData: await Asyncstorage.getItem('@MyUser'),
    });
    // let userdata = await Asyncstorage.getItem('@MyUser');

    // this.setState({
    //   userData: this.state.userData.push(userdata),
    // });

    Data.push(JSON.parse(this.state.userData));

    // : Data1.push(this.state.userData);

    console.log('New value', Data);
    console.log('name', this.state.userData[0]);
    // console.log('Userdata', JSON.parse(this.state.userData));
  }
  editDetails = (name) => {
    Data.map(async (item) => {
      if (item.name === name) {
        await Asyncstorage.setItem('@EditUser', item);
        this.props.navigation.navigate('editdetails');
      }
    });
  };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: height(2),
          }}>
          <Text
            style={{
              fontSize: totalSize(3),
              marginTop: height(3),
            }}>
            Contact List
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('adddetails')}>
            <Text
              style={{
                fontSize: totalSize(3),

                marginTop: height(3),
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          style={{marginBottom: height(10)}}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(data, item) => {
            return (
              <ListView
                data={data}
                usertype={this.state.usertype}
                editDetails={() => {
                  this.editDetails(data.item.name);
                }}
              />
            );
          }}
        />
      </View>
    );
  }
}
