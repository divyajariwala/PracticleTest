import {StyleSheet} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';

export default StyleSheet.create({
  defaultStyle: {
    height: height(6),
    marginTop: height(3),
    width: '100%',
    paddingBottom: height(1),
    paddingTop: height(1),
    paddingLeft: height(2),
   
    fontSize: totalSize(1.8),
    borderRadius: height(2),
    borderWidth: height(0.2),
    
  },
  containerStyle: {
    // paddingHorizontal:height(3)
  },
});
