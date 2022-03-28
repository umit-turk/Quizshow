import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowRight} from '../../constants/Images';
import {Colors} from '../../constants/Colors';
import {FONTS} from '../../constants/FontSize';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconAndTitle}>
        <TouchableOpacity style={styles.goBackBtn} onPress={onPress}>
          <ArrowRight />
        </TouchableOpacity>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {height: 41},
  iconAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  goBackBtn: {
    position: 'absolute',
    paddingRight: 20,
    paddingLeft: 20,
    zIndex: 1,
  },
  divider: {borderBottomWidth: 0.5, borderBottomColor: Colors.secondary},
  text: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 17,
    color: Colors.primary,
    fontFamily: FONTS.Poppins,
  },
});
