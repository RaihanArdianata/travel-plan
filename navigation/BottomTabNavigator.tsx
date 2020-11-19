import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
//screen
import HomeScreen from '../screens/TabOneScreen';
import PlanScreen from '../screens/TabTwoScreen';
import ExploreScreen from '../screens/ExploreScreen';
import DetailPlaceScreen from '../screens/DetailPlaceScreen'
import { BottomTabParamList, ExploreParamList, HomeParamList, PlanParamList } from '../types';

//get all params from bottom tab
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  return (
    <BottomTab.Navigator
      initialRouteName="Explore"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Plans"
        component={PlanNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-compass" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home Title' }}
      />
    </HomeStack.Navigator>
  );
}

const PlanStack = createStackNavigator<PlanParamList>();

function PlanNavigator() {
  return (
    <PlanStack.Navigator>
      <PlanStack.Screen
        name="PlanScreen"
        component={PlanScreen}
        options={{ headerTitle: 'Plan Title' }}
      />
    </PlanStack.Navigator>
  );
}

const ExploreStack =  createStackNavigator<ExploreParamList>();

function ExploreNavigator() {
  return(
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
      {/* <ExploreStack.Screen
          name="PlaceDetailScreen"
          component={DetailPlaceScreen}
          options={{headerShown: false}}

        /> */}
    </ExploreStack.Navigator>
  )
}