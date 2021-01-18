import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  PermissionsAndroid,
} from 'react-native';
import {height, totalSize} from 'react-native-dimension';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Textinput from '../../Components/Textinput/Textinput';
import Style from './Style';
import Button from '../../Components/Button/Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import Model from '../../Components/Model/Model';
const {container, headingtext, avtar, avtarplaceholder} = Style;

export default class AddDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: {
        name: '',
        email: '',
        phonenumber: '',
        model: false,
      },
    };
  }
  chooseFile = () => {
    this.setState({
      model: false,
    });
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
    launchImageLibrary(options, (response) => {
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
  captureImage = async (type) => {
    this.setState({
      model: false,
    });
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await this.requestCameraPermission();
    let isStoragePermitted = await this.requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(  {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      }, (response) => {
        console.log(response);
      })
      // launchCamera(options, (response) => {
      //   console.log('Response = ', response);

      //   if (response.didCancel) {
      //     alert('User cancelled camera picker');
      //     return;
      //   } else if (response.errorCode == 'camera_unavailable') {
      //     alert('Camera not available on device');
      //     return;
      //   } else if (response.errorCode == 'permission') {
      //     alert('Permission not satisfied');
      //     return;
      //   } else if (response.errorCode == 'others') {
      //     alert(response.errorMessage);
      //     return;
      //   }
      //   console.log('base64 -> ', response.base64);
      //   console.log('uri -> ', response.uri);
      //   console.log('width -> ', response.width);
      //   console.log('height -> ', response.height);
      //   console.log('fileSize -> ', response.fileSize);
      //   console.log('type -> ', response.type);
      //   console.log('fileName -> ', response.fileName);
      //   setFilePath(response);
      // }).catch((e)=>{
      //   console.log(e);
      // });
    }
  };

  requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  saveData = async () => {
    const {
      User: {name, email, phonenumber},
    } = this.state;
    if (name === '') {
      alert('Please Enter Name');
    } else if (email === '') {
      alert('Please Enter Email');
    } else if (phonenumber === '') {
      alert('Please Enter Phoneumber');
    } else {
      await AsyncStorage.setItem('@MyUser', JSON.stringify(this.state.User));
      let userdata = await AsyncStorage.getItem('@MyUser');
      console.log('Adddetails', userdata);
      this.props.navigation.replace('homescreen');
    }
  };

  changeData = (value) => {
    this.setState({
      User: {
        ...this.state.User,
        ...value,
      },
    });
  };

  render() {
    const {
      User: {name, email, phonenumber},
    } = this.state;

    return (
      <SafeAreaView>
        <View style={[container]}>
          <View style={{height: '20%'}}>
            <Text style={[headingtext]}> ADD DETAILS</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[avtarplaceholder]}
                onPress={() =>
                  this.setState({
                    model: true,
                  })
                }>
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
              Title="Name"
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
            <Button Buttontext="Add" onclick={() => this.saveData()} />
          </View>
          <Model
            visible={this.state.model}
            selectLibrary={() => this.chooseFile()}
            selectCamera={() => this.captureImage()}
          />
        </View>
      </SafeAreaView>
    );
  }
}
