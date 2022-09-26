import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import FeedScreen from '../../screen/FeedScreen'
import SettingsScreen from '../../screen/SettingsScreen'

const Tab = createBottomTabNavigator()

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
