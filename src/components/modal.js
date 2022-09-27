import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {clear_space_modal} from '../store/actions/space'
import {View, Text, TouchableOpacity, Dimensions} from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import {useNavigation} from '@react-navigation/native'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

const Modal = () => {
  const dispatch = useDispatch()
  const open = useSelector(state => state.space.open)
  const [minimize, setMinimize] = useState(false)
  const navigation = useNavigation()

  const translateY = useSharedValue(0)
  const active = useSharedValue(false)

  const scrollTo = useCallback(destination => {
    'worklet'
    active.value = destination !== 0
    translateY.value = withTiming(destination, {damping: 30})
  }, [])

  useEffect(() => {
    if (open) {
      scrollTo(-SCREEN_HEIGHT)
    }
  }, [open])

  const spaceScreenStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 0],
      Extrapolate.CLAMP,
    )
    return {
      borderRadius,
      transform: [{translateY: translateY.value}],
    }
  })

  if (minimize) {
    return (
      <View className="absolute bottom-14 right-3 left-3">
        <TouchableOpacity
          className="bg-[#00AACC] rounded-lg p-4 shadow"
          onPress={() => {
            scrollTo(-SCREEN_HEIGHT)
            setMinimize(false)
          }}>
          <Text className="text-white font-bold">Space Now!!!</Text>
        </TouchableOpacity>
      </View>
    )
  } else if (open) {
    return (
      <Animated.View
        style={[
          {
            top: SCREEN_HEIGHT,
            height: SCREEN_HEIGHT,
            width: '100%',
            backgroundColor: 'green',
            position: 'absolute',
            borderRadius: 25,
          },
          spaceScreenStyle,
        ]}>
        <View className="p-5 flex-col items-center justify-center">
          <TouchableOpacity
            onPress={() => {
              scrollTo(0)
              setMinimize(true)
              navigation.navigate('Top')
            }}>
            <Text className="text-white font-bold bg-[#00AACC] p-3 rounded-full">
              Minimize
            </Text>
          </TouchableOpacity>
          <Text className="text-white font-bold text-2xl">Space</Text>
          <TouchableOpacity
            onPress={() => {
              scrollTo(0)
              dispatch(clear_space_modal())
              navigation.navigate('Top')
            }}>
            <Text className="text-white font-bold bg-[#00AACC] p-3 rounded-full">
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  } else {
    return <></>
  }
}

export default Modal
