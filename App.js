import React from 'react';
import { Button, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { HomeStack, JobsStack } from './stacks';

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Jobs: { screen: JobsStack },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
