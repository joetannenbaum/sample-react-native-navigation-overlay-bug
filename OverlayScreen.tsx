import React from 'react';
import {Text, View} from 'react-native';

export interface OverlayScreenProps {}

const OverlayScreen: React.FC<OverlayScreenProps> = props => {
  return (
    <View style={{borderColor: 'red', borderWidth: 1, marginTop: 100}}>
      <Text style={{color: 'red', fontSize: 50}}>Overlay Screen</Text>
    </View>
  );
};

OverlayScreen.options = {
  layout: {
    componentBackgroundColor: 'transparent',
    backgroundColor: 'transparent',
  },
  overlay: {
    interceptTouchOutside: false,
  },
};

export default OverlayScreen;
