import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IoniCons from 'react-native-vector-icons/Ionicons'

import TabBar from './components'

import {
  Auth,
  SignIn,
  SignUp,
  HomeScreen,
  CreateEstablishmentScreen,
  FavoritesScreen,
  EvaluationScreen,
  MoreScreen,
  ProfileScreen,
/* PLOP_INJECT_IMPORT */
	EstablishmentForm,
	CameraScreen,
	CreateEvaluationFlowScreen,
	EstablishmentDetails,
	CategoryScreen,
} from './pages'

const AuthNavigator = createSwitchNavigator({
  Auth,
  SignIn,
  SignUp,
})

const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon style={{ marginTop: 20 }} size={40} name="home-account" color={tintColor} />,
        title: ''
      }
    },
    CreateEstablishmentScreen: {
      screen: CreateEstablishmentScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon style={{ marginTop: 20 }} size={40} name="plus-circle-outline" color={tintColor} />,
        title: ''
      }
    },
    FavoritesScreen: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon style={{ marginTop: 20 }} size={40} name="heart-box-outline" color={tintColor} />,
        title: ''
      }
    },
    CreateEvaluationFlowScreen: {
      screen: CreateEvaluationFlowScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon style={{ marginTop: 20 }} size={40} name="account-star" color={tintColor} />,
        title: ''
      }
    },
    MoreScreen: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <IoniCons style={{ marginTop: 20 }} size={40} name="md-more" color={tintColor} />,
        title: ''
      }
    },
  },
  {
    initialRouteName: 'HomeScreen',
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: '#FA6916',
      inactiveTintColor: "#2F2929",
      headerShown: false
    }
  }
)

const StackNavigator = createStackNavigator(
  {
    tabs: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false
      }
    },
    ProfileScreen,
    CategoryScreen: {
      screen: CategoryScreen,
      navigationOptions: {
        title: null
      }
    },
    HomeScreen,
    CreateEstablishmentScreen,
    FavoritesScreen,
    EvaluationScreen: {
      screen: EvaluationScreen,
      navigationOptions: {
        title: 'Avaliar'
      }
    },
    MoreScreen,
    EstablishmentDetails: {
      screen: EstablishmentDetails,
      navigationOptions: {
        headerShown: false,
        headerMode: 'none'
      }
    },
    CameraScreen: {
      screen: CameraScreen,
      navigationOptions: {
        headerShown: false,
        headerMode: 'none'
      }
    },
    EstablishmentForm: {
      screen: EstablishmentForm,
      navigationOptions: {
        headerShown: false,
        headerMode: 'none'
      }
    },
    /* PLOP_INJECT_IMPORT */
  },
  {
    initialRouteName: 'tabs',
  }
)

const AppContainer = createSwitchNavigator({
  AuthRoutes: { screen: AuthNavigator },
  Tabs: { screen: TabNavigator },
  Stack: { screen: StackNavigator }
})

export default createAppContainer(AppContainer)