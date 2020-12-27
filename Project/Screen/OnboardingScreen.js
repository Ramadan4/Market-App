import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const Skip = ({...props}) => {
  <Button title="Skip" color="#000000" backgroundColor="#bbb" {...props} />;
};
const Next = ({...props}) => {
  <Button title="Next" color="#000000" backgroundColor="#bbb" {...props} />;
};
const Done = ({...props}) => {
  <Button title="Done" color="#000000" backgroundColor="#bbb" {...props} />;
};
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      // SkipButtonComponent={Skip}
      // NextButtonComponent={Next}
      // DoneButtonComponent={Done}
      onSkip={() => {
        navigation.replace('HomeScreen');
      }}
      onDone={() => {
        navigation.navigate('HomeScreen');
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/11.jpg')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with nbvlskdbvnlkdsbvn sknvksl',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/22.png')} />,
          title: 'Onboarding 1',
          subtitle: 'Done with nbvlskdbvnlkdsbvn sknvksl',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/33.jpg')}
          style={{width:'100%' ,height:'100%'}}
          />,
          title: 'Onboarding 1',
          subtitle: 'Done with nbvlskdbvnlkdsbvn sknvksl',
        },
      ]}
    />
  );
};
export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
