import React from 'react';

import {View, Text} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'


import BottomTabNavigator from './navigation/BottomTabNavigator'


const App = () => {
    return(
      console.log("app file"),
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
      
    );
};

export default App;