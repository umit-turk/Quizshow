import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppScreens from '../../constants/Screens';
import LottieView from 'lottie-react-native';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace(AppScreens.MainBoarding);
    }
  }, [authLoaded, animationLoaded, props.navigation]);

  const onAnimationFinished = () => setAnimationLoaded(true);

  return (
    <View style={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
      <LottieView
        onAnimationFinish={onAnimationFinished}
        autoPlay
        loop={false}
        source={require('../../Lottie/itisquiz.json')}
      />
    </View>
  );
};

export default SplashScreen;
