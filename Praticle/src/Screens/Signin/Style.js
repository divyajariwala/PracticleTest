import {StyleSheet} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';

export default StyleSheet.create({
  container: {
    marginTop: height(3),
    marginHorizontal: height(2),
    justifyContent: 'center',
    //alignItems:'center'
  },
  headingtext: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: totalSize(4),
  },
  buttonStyle: {
    width: '50%',
    borderRadius: height(1),
    borderWidth: height(0.3),
    justifyContent: 'center',
    alignItems: 'center',
    height: height(7),
  },
  register: {
    textAlign: 'center',
    fontSize: totalSize(3),
    marginTop: height(3),
  },
  registerText:{
      fontSize:totalSize(3),
      textAlign:'center'
  }
});
