import React, { Component } from 'react';
import { Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator} from 'react-navigation';

import MenuDrawer from './components/MenuDrawer';

import LogicScreen from './screens/LogicScreen';
import StatScreen from './screens/StatScreen';
import SettingScreen from './screens/SettingScreen';
import AddUserScreen from './screens/AddUserScreen';



const DrawerConfig = {
  drawerType: 'front',
  edgeWidth: 100,
  contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}

const MyDrawerNavigator = createDrawerNavigator({
  Logic: {
          screen: LogicScreen,
         } ,
  Statistics: {
          screen: StatScreen
         },
  Settings : {
         screen: SettingScreen
        },
  AddUser: {
    screen: AddUserScreen 
  }
    },
    DrawerConfig
);

const AppContainer = createAppContainer(MyDrawerNavigator);

class App extends Component{
  render() {
    return <AppContainer />
  }
}

 
export default App;