import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {clear_space_modal} from '../store/actions/space'
import {View, Text, Button, TouchableOpacity, Dimensions} from 'react-native'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'

import BottomSheet from '@gorhom/bottom-sheet'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

const {height: SCREEN_HEIGHT} = Dimensions.get('window')

const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

const Modal = () => {
  const dispatch = useDispatch()
  const open = useSelector(state => state.space.open)
  const bottomSheetRef = useRef(null)
  const [minimize, setMinimize] = useState(false)

  useEffect(() => {
    if (open && bottomSheetRef.current) {
      bottomSheetRef.current.expand()
    }
  }, [open])

  const onClose = () => {
    dispatch(clear_space_modal())
  }

  const translateY = useSharedValue(0)
  const active = useSharedValue(false)

  const scrollTo = useCallback(destination => {
    'worklet'

    active.value = destination !== 0

    translateY.value = withSpring(destination, {damping: 10})
  }, [])

  const isActive = useCallback(() => {
    return active.value
  }, [])

  const context = useSharedValue({y: 0})

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value}
    })
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(0)
      } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
        scrollTo(MAX_TRANSLATE_Y)
      }
    })

  // useEffect(() => {
  //   scrollTo(-SCREEN_HEIGHT / 3)
  // }, [])

  console.log('isActive', isActive())

  useEffect(() => {
    // if (isActive()) {
    //   scrollTo(0)
    // } else {
    //   scrollTo(-SCREEN_HEIGHT / 3)
    // }

    if (open) {
      scrollTo(-SCREEN_HEIGHT / 3)
    }
  }, [open])

  const rBottomSheetStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
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
          className="bg-[#00AACC] rounded-lg p-4"
          onPress={() => {
            setMinimize(!minimize)
          }}>
          <Text className="text-white font-bold">Space Now</Text>
        </TouchableOpacity>
      </View>
    )
  } else if (open) {
    return (
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {
              height: SCREEN_HEIGHT,
              width: '100%',
              backgroundColor: 'green',
              position: 'absolute',
              top: SCREEN_HEIGHT,
              borderRadius: 25,
            },
            rBottomSheetStyle,
          ]}>
          <View className="w-[75] h-[4] bg-gray-400 self-center mt-3 rounded" />
          <Text
            className="text-center"
            onPress={() => {
              setMinimize(!minimize)
            }}>
            Space
          </Text>
        </Animated.View>
      </GestureDetector>
    )
  } else {
    return <></>
  }

  // これはチャットで使う
  // <BottomSheet
  //   ref={bottomSheetRef}
  //   snapPoints={[100, '100%']}
  //   index={-1}
  //   onClose={onClose}
  //   handleHeight={40}
  //   enablePanDownToClose>
  //   <Text>test</Text>
  // </BottomSheet>
}

export default Modal
