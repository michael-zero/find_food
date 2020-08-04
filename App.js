import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//telas 
import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'


const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);