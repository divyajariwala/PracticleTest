import {StyleSheet} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';

export default StyleSheet.create({
  MainContainer: {
    height: height(7),
    borderRadius: height(4.2),
    justifyContent: 'center',
    alignSelf: 'center',

    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height(5),
    marginBottom: height(3),
    width: width(40),
    borderRadius:height(2),
    borderWidth:height(0.3)
  },
  buttonText: {
    fontSize: totalSize(2.5),
  },
});
