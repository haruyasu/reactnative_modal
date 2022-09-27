import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {TopScreen} from '../screen/TopScreen'
import {SpaceSettingsScreen} from '../screen/SpaceSettingsScreen'
import {SettingsScreen} from '../screen/SettingsScreen'
import {SpaceJoinScreen} from '../screen/SpaceJoinScreen'

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
        },
      })}>
      <Tab.Screen name="Top" component={TopScreen} />
      <Tab.Screen name="New" component={SpaceSettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen
        name="Join"
        component={SpaceJoinScreen}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Tab.Navigator>
  )
}
