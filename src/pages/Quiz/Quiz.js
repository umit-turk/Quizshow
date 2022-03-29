import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';

const Quiz = () => {
  const route = useRoute();
  const {categoryId} = route.params;
  const {info} = route.params.difficulty;
  const [questions, setQuestions] = useState();

  const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${info}&type=multiple&encode=url3986`;
  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      console.log(responseData);
      setQuestions(responseData.results);
      console.log(questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Quiz</Text>
      <FlatList
        renderItem={({item, index}) => {
          return <Text>{item.category}</Text>;
        }}
        data={questions}
      />
    </View>
  );
};

export default Quiz;
