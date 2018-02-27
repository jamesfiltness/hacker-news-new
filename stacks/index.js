import { StackNavigator } from 'react-navigation';
import Home from '../containers/home';
import Jobs from '../containers/jobs';
import Details from '../containers/details';

export const HomeStack = StackNavigator({
  Home: { screen: Home },
  Details: { screen: Details },
});

export const JobsStack = StackNavigator({
  Jobs: { screen: Jobs },
  Details: { screen: Details },
});
