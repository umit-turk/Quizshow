import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import data from '../../constants/data';
import {
  Books,
  Car,
  Celebrities,
  Computers,
  Gadget,
  General,
  History,
  Mathematics,
  Movies,
  Music,
  Nature,
  Random,
  Sport,
  Television,
  Theaters,
  VideoGames,
  Mythology,
  World,
  Politics,
  Art,
  Animal,
  Comic,
  Anime,
  Kid,
} from '../../constants/Images';

const Login = () => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text>
          {(item.icon === '1' && <Random />) ||
            (item.icon === '2' && <General />) ||
            (item.icon === '3' && <Books />) ||
            (item.icon === '4' && <Movies />) ||
            (item.icon === '5' && <Music />) ||
            (item.icon === '6' && <Theaters />) ||
            (item.icon === '7' && <Television />) ||
            (item.icon === '8' && <VideoGames />) ||
            (item.icon === '9' && <Nature />) ||
            (item.icon === '10' && <Computers />) ||
            (item.icon === '11' && <Mathematics />) ||
            (item.icon === '12' && <Mythology />) ||
            (item.icon === '13' && <Sport />) ||
            (item.icon == '14' && <World />) ||
            (item.icon === '15' && <History />) ||
            (item.icon == '16' && <Politics />) ||
            (item.icon === '17' && <Art />) ||
            (item.icon === '18' && <Celebrities />) ||
            (item.icon === '19' && <Animal />) ||
            (item.icon === '20' && <Car />) ||
            (item.icon === '21' && <Comic />) ||
            (item.icon === '22' && <Gadget />) ||
            (item.icon === '23' && <Anime />) ||
            (item.icon === '24' && <Kid />)}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-around'}}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Login;
