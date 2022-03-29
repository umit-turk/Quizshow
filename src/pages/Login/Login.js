import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import data from '../../constants/data';
import {Colors} from '../../constants/Colors';
import Header from '../../components/Header/Header';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import RenderCategory from '../../components/RenderCategory/RenderCategory';
import {useState} from 'react';
import AppScreens from '../../constants/Screens';

const Login = () => {
  const navigation = useNavigation();
  const [categoryId, setCategoryId] = useState(null);

  const goBackPrev = () => {
    navigation.goBack();
    console.log('bastımn');
  };
  const handleClick = id => {
    setCategoryId(id);
    console.log(categoryId);
    navigation.navigate(AppScreens.Home, {categoryId: id});
  };

  const title = 'Categories';
  return (
    <View style={styles.container}>
      <Header title={title} onPress={goBackPrev} />

      <LottieView
        style={styles.lottieStyle}
        autoPlay
        source={require('../../Lottie/difficult.json')}
      />

      <FlatList
        renderItem={({item, index}) => (
          <RenderCategory
            onPress={() => handleClick(item.category)}
            item={item}
            index={index}
            bgColor={
              categoryId === item.category ? Colors.lightBlue : Colors.white
            }
          />
        )}
        data={data}
        keyExtractor={item => item.name}
        contentContainerStyle={{
          padding: 20,
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  lottieStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
    width: 120,
    height: 120,
  },
});
