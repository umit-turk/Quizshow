import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {Colors} from '../../constants/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ArrowRight from '../../constants/Images';
import {useNavigation} from '@react-navigation/native';
import AppScreens from '../../constants/Screens';

const Onboarding1 = () => {
  const navigation = useNavigation();

  const nextPage = () => {
    navigation.navigate(AppScreens.Onboarding2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <Text style={styles.textTitle}>Quiz Show</Text>
        <LottieView
          style={{width: 250}}
          autoPlay
          source={require('../../Lottie/hi.json')}
        />
      </View>
      <View style={styles.titleAndButton}>
        <Text style={styles.titleText}>
          {`Want to learn something new but can’t seem to find the time to
dedicate to it?`}
        </Text>
        <TouchableOpacity onPress={nextPage} style={styles.buton}>
          <ArrowRight />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding1;

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
    backgroundColor: Colors.dark,
    marginBottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});