import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';
import {height} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
import Button from '../../Components/Button/Button';
import ImagePicker from 'react-native-image-picker';
const {container, headingtext, avtar, avtarplaceholder} = Style;

export default class EditDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassowrd: '',
      fileUri: '',
    };
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
  render() {
    return (
      <SafeAreaView>
        <View style={[container]}>
          <View style={{height: '20%'}}>
            <Text style={[headingtext]}> EDIT DETAILS</Text>
          </View>
          <View>
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
            {/* <TouchableOpacity
              style={[buttonStyle]}
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text>Edit</Text>
            </TouchableOpacity> */}
            <Button
              Buttontext="Edit"
              onclick={() => this.props.navigation.navigate('editdetails')}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
