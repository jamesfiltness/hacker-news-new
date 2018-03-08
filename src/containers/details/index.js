import React from 'react';
import { Button, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Details extends React.Component {
  static navigationOptions = (props) => {
   return {
     title: 'Home',
     tabBarIcon: ({ focused, tintColor }) => {
       const { routeName } = props.screenProps.routeName;
       let iconName;
       if (routeName === 'Home') {
         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
       } else if (routeName === 'Jobs') {
         iconName = `ios-briefcase${focused ? '' : '-outline'}`;
       }

       return <Ionicons name={iconName} size={25} color={tintColor} />;
     },
   }
 };
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}
