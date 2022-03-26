import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Quiz from '../pages/Quiz/Quiz';
import Result from '../pages/Result/Result';
import AppScreens from '../constants/Screens';
import Onboarding1 from '../pages/Onboarding/Onboarding1';
import Onboarding2 from '../pages/Onboarding/Onboarding2';
import SplashScreen from '../pages/SplashScreen/SplashScreen';

const Stack = createStackNavigator();

const MainBoarding = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={AppScreens.Onboarding1} component={Onboarding1} />
      <Stack.Screen name={AppScreens.Onboarding2} component={Onboarding2} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AppScreens.SplashScreen} component={SplashScreen} />
        <Stack.Screen name={AppScreens.MainBoarding} component={MainBoarding} />
        <Stack.Screen name={AppScreens.Login} component={Login} />
        <Stack.Screen name={AppScreens.Home} component={Home} />
        <Stack.Screen name={AppScreens.Quiz} component={Quiz} />
        <Stack.Screen name={AppScreens.Result} component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
