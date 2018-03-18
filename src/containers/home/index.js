import React from 'react';
import { Button, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { topStories } from '../../actions/top-stories';

export class Home extends React.Component {
   static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name="ios-information-circle" size={25} color={tintColor} />;
      },
    }
  };

  componentDidMount() {
    this.props.topStoriesAction();
  }

  render() {
    console.log('top stories', this.props.topStories);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    topStories: state.topStories,
  }
};

const mapDispatchToProps = {
  topStoriesAction: topStories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
