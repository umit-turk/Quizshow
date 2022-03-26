import {View, Text} from 'react-native';
import Svg, {
  Path,
  G,
  Defs,
  Rect,
  ClipPath,
  Stop,
  LinearGradient,
  Mask,
} from 'react-native-svg';
import React from 'react';

const ArrowRight = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M5.8335 14H22.1668"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 5.83333L22.1667 14L14 22.1667"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default ArrowRight;
