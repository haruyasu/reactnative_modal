import React from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {open_space_modal} from '../store/actions/space'

export const SpaceSettingsScreen = () => {
  const dispatch = useDispatch()
  const open = useSelector(state => state.space.open)

  const tmp = {
    abc: '1234',
  }

  return (
    <View>
      <Text className="text-center text-2xl mb-5">New</Text>

      {open ? (
        <View>
          <Text className="bg-gray-400 p-3 text-white rounded text-center mx-5">
            新規
          </Text>
        </View>
      ) : (
        <TouchableOpacity onPress={() => dispatch(open_space_modal(true, tmp))}>
          <Text className="bg-blue-500 p-3 text-white rounded text-center mx-5">
            新規
          </Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
