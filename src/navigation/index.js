import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {BottomTabNavigator} from './BottomTabNavigator'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

import Modal from '../components/modal'

const Stack = createStackNavigator()

export const RootNavigator = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BottomTabNavigator"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
        <Modal />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
