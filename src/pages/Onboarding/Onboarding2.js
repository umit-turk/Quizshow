import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {Colors} from '../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import AppScreens from '../../constants/Screens';
import {useEffect} from 'react';
import {useRef} from 'react';

const Onboarding2 = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(AppScreens.Login);
  };

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play(0, 100);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <Text style={styles.textTitle}>Quiz Show</Text>
        <LottieView
          ref={animation}
          style={{width: 250}}
          loop={false}
          autoPlay
          source={require('../../Lottie/book-idea.json')}
        />
      </View>
      <View style={styles.titleAndButton}>
        <Text style={styles.titleText}>
          {`It’s time to test your knowledge on the concepts so far. Blended learning has been interpreted in various ways. `}
        </Text>
        <TouchableOpacity onPress={goToLogin} style={styles.buton}>
          <LottieView autoPlay source={require('../../Lottie/Go.json')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    paddingTop: 20,
    fontSize: 30,
    color: Colors.primary,
  },
  lottieContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleAndButton: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 50,
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: 22,
    color: Colors.secondary,
    textAlign: 'center',
  },
  buton: {
    marginBottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
