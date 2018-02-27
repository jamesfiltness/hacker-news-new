import React from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import Home from './containers/home';
import Jobs from './containers/jobs';
import Details from './containers/details';

const HomeStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
});

const JobsStack = StackNavigator({
  Jobs: { screen: Jobs },
  Details: { screen: Details },
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Jobs: { screen: JobsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Jobs') {
          iconName = `ios-briefcase${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
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
