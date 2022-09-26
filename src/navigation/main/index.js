import React, {useEffect, useRef, useMemo, useCallback} from 'react'
import {View, Text, StatusBar, Button} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../home'
import Modal from '../../components/modal'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const Stack = createStackNavigator()

export default function Route() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <Modal />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
