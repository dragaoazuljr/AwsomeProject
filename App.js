import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './components/login/login'
import Home from './components/home/home'

const AppNavigator = createStackNavigator({
  Login,
  Home: {
    screen: Home,
    navigationsOptions:{
      header: null
    }
  }
})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
