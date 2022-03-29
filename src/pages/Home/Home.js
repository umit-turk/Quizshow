import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../../constants/Colors';
import {FONTS} from '../../constants/FontSize';
import {ArrowRightCircle, ArrowRightCircleBlue} from '../../constants/Images';
import LottieView from 'lottie-react-native';
import AppScreens from '../../constants/Screens';

const difficult = [
  {name: 'Easy', id: 2, info: 'easy'},
  {name: 'Medium', id: 3, info: 'medium'},
  {name: 'Hard', id: 4, info: 'hard'},
];

const Home = () => {
  const [difficulty, setDifficulty] = useState(0);
  const route = useRoute();
  const {categoryId} = route.params;
  const navigation = useNavigation();
  const goToBack = () => {
    navigation.goBack();
  };

  const handleClick = info => {
    console.log(info.id);
    setDifficulty(info);
  };

  const goToQuiz = () => {
    navigation.navigate(AppScreens.Quiz, {categoryId, difficulty});
  };

  const title = 'Start';
  return (
    <View style={styles.container}>
      <Header title={title} onPress={goToBack} />
      <Text style={styles.text}>Select Difficulty;</Text>
      {difficult.map((el, idx) => {
        return (
          <TouchableOpacity
            onPress={() => handleClick(el)}
            style={[
              styles.btnMode,
              {
                borderColor:
                  difficulty.id === el.id
                    ? Colors.borderBlue
                    : Colors.secondaryBorder,
              },
            ]}
            key={idx}>
            {difficulty.id === el.id ? (
              <ArrowRightCircleBlue />
            ) : (
              <ArrowRightCircle />
            )}
            <Text style={styles.textBtn}>{el.name}</Text>
          </TouchableOpacity>
        );
      })}
      {difficulty ? (
        <TouchableOpacity onPress={goToQuiz} style={styles.startBtn}>
          <LottieView
            style={{width: 80, height: 80}}
            autoPlay
            source={require('../../Lottie/start-button.json')}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    marginTop: 31,
    fontSize: 22,
    marginLeft: 20,
    color: Colors.primary,
    fontFamily: FONTS.Poppins,
    marginBottom: 30,
  },
  btnMode: {
    height: 54,
    borderWidth: 2,
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  textBtn: {
    paddingLeft: 12,
  },
  startBtn: {
    position: 'absolute',
    bottom: 20,
  },
});
