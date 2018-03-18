import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';
import { addListener } from '../../utils/redux';
import Home from '../../containers/home';
import Jobs from '../../containers/jobs';
import Details from '../../containers/details';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HomeStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
});

export const JobsStack = StackNavigator({
  Jobs: { screen: Jobs },
  Details: { screen: Details },
});

export const AppNavigator = TabNavigator(
  {
    Home: {
      screen: ({ navigation, screenProps }) => {
        return <HomeStack screenProps={{ parentNavigation: navigation, ...screenProps }} />
      },
      navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Ionicons name="ios-information-circle" size={25} color={tintColor} />;
      },
      tabBarOnPress: (navigation) => {
        console.log('test tab bar press overview', navigation);
        navigation.jumpToIndex(navigation.scene.index);
      }
    }
    },
    Jobs: {
      screen: ({ navigation, screenProps }) => {
        return <JobsStack screenProps={{ parentNavigation: navigation, ...screenProps }} />
      },
      navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
          return <Ionicons name="ios-briefcase" size={25} color={tintColor} />;
      },
      tabBarOnPress: (navigation) => {
        console.log('test tab bar press overview', navigation);
        navigation.jumpToIndex(navigation.scene.index);
      }
    }
    }
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

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
