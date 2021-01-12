import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
import Button from '../../Components/Button/Button';
import ImagePicker from 'react-native-image-picker';
import Asyncstorage from '@react-native-community/async-storage';

const {container, headingtext, avtar, avtarplaceholder} = Style;

export default class EditDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usertype: '',
      User: {
        name: '',
        email: '',
        phonenumber: '',
      },
    };
  }
  async componentDidMount() {
    this.setState({
      User: JSON.parse(await Asyncstorage.getItem('@EditUser')),
    });
    console.log('Edit data', this.state.User);
    console.log('Name', this.state.User.name);
  }

  chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        this.setState({
          fileUri: response.uri,
        });
      }
    });
  };
  changeData = (value) => {
    this.setState({
      User: {
        ...this.state.User,
        ...value,
      },
    });
  };
  editDetails = async () => {
    await AsyncStorage.setItem('@MyUser', JSON.stringify(this.state.User));
    let userdata = await AsyncStorage.getItem('@MyUser');
    console.log('Adddetails', userdata);
    this.props.navigation.navigate('homescreen');
  };
  render() {
    const {
      User: {name, email, phonenumber},
    } = this.state;
    return (
      <SafeAreaView>
        <View style={[container]}>
          <View style={{height: '20%'}}>
            <Text style={[headingtext]}> Edit DETAILS</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[avtarplaceholder]}
                onPress={this.chooseFile.bind(this)}>
                <Image
                  source={{
                    uri: this.state.fileUri,
                  }}
                  style={[avtar]}
                />
                {/* {this.state.fileuri == null ? (
                <Icon name="plus" size={30} color="black" />
              ) : null} */}
              </TouchableOpacity>
              <Text
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: totalSize(2),
                  marginTop: height(4.5),
                  marginLeft: height(3),
                }}>
                Upload Photo
              </Text>
            </View>
            {/* <Textinput
              value={name}
              KeyBoardType="email-address"
              Title="Name"
              onChangeText={(text) => {
                let data = [...this.state.User];
                data[2].name = text;c
                this.setState({data});
              }}
            /> */}
            <Textinput
              value={name}
              KeyBoardType="email-address"
              Title="Email"
              // onChangeText={(text) => {
              //   let data = [...this.state.User];
              //   let data1 = {...data[0]};
              //   data1.email = text;
              //   data[0] = data1;
              //   this.setState({User: data});
              //   console.log(data);
              // }}
              onChangeText={(text) => this.changeData({name: text})}
            />
            <Textinput
              value={email}
              KeyBoardType="email-address"
              Title="Email"
              // onChangeText={(text) => {
              //   let data = [...this.state.User];
              //   let data1 = {...data[0]};
              //   data1.email = text;
              //   data[0] = data1;
              //   this.setState({User: data});
              //   console.log(data);
              // }}
              onChangeText={(text) => this.changeData({email: text})}
            />
            <Textinput
              value={phonenumber}
              Title="Phone Number"
              // onChangeText={(text) => {
              //   let data = [...this.state.User];
              //   let data1 = {...data[0]};
              //   data1.phonenumber = text;
              //   data[0] = data1;
              //   this.setState({User: data});
              //   console.log(data);
              // }}
              onChangeText={(text) => this.changeData({phonenumber: text})}
            />
          </View>
          <View
            style={{
              height: '40%',
              marginTop: height(10),

              alignItems: 'center',
              width: '100%',
            }}>
            {/* <TouchableOpacity
              style={[buttonStyle]}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Edit</Text>
            </TouchableOpacity> */}
            <Button Buttontext="Edit" onclick={() => this.saveData()} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
