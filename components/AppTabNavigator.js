import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RewardScreen from '../screens/RewardScreen';
import WriteScreen from '../screens/WriteScreen';



export const AppTabNavigator = createBottomTabNavigator({
  Reward : {
    screen: RewardScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/reward.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Reward",
    }
  },
  Write: {
    screen: WriteScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/ask.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Write",
    }
  }
});