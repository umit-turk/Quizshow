import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {FONTS} from '../../constants/FontSize';
import {Colors} from '../../constants/Colors';
import AppScreens from '../../constants/Screens';

let renkler = [
  'rgba(4, 134, 254, 0.1)',
  'rgba(255, 34, 153, 0.1)',
  'rgba(30, 186, 190, 0.1)',
  'rgba(255, 204, 24, 0.1)',
  'rgba(123, 97, 255, 0.1)',
  'rgba(4, 134, 254, 0.1)',
  'rgba(36, 212, 138, 0.1)',
];

const RenderCategory = ({item, index, onPress, bgColor}) => {
  return (
    <View style={{marginBottom: 20}}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: bgColor,
          borderRadius: 12,
        }}>
        <View
          style={{
            width: 48,
            height: 48,
          }}>
          <Text
            style={[
              styles.iconBackground,
              {backgroundColor: renkler[index % renkler.length]},
            ]}>
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
        <Text style={styles.CategoryText}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RenderCategory;

const styles = StyleSheet.create({
  iconBackground: {
    height: 48,
    width: 48,
    borderRadius: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  CategoryText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
    paddingLeft: 20,
    fontFamily: FONTS.Poppins,
  },
});
