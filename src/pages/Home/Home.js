import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Colors} from '../../constants/Colors';
import {FONTS} from '../../constants/FontSize';

const difficult = [
  {name: 'Any Difficulty', info: null},
  {name: 'Easy', info: 'easy'},
  {name: 'Medium', info: 'medium'},
  {name: 'Hard', info: 'hard'},
];

const Home = () => {
  const route = useRoute();
  console.log(route);
  const navigation = useNavigation();
  const goToBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header title={'Start'} onPress={goToBack} />
      <Text style={styles.text}>Select Difficulty;</Text>
      {difficult.map((el, idx) => {
        return (
          <TouchableOpacity key={idx}>
            <Text>{el.name}</Text>
          </TouchableOpacity>
        );
      })}
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
});
