import React from 'react';
import { Button, Text, View } from 'react-native';

export default class Jobs extends React.Component {
   static navigationOptions = () => {
    return {
      title: 'Jobs',
    }
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Jobs!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
