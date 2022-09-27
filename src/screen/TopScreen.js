import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export const TopScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text className="text-center text-2xl mb-5">Top</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Join')}>
        <Text className="bg-blue-500 p-3 text-white rounded text-center mx-5">
          参加リスト
        </Text>
      </TouchableOpacity>
    </View>
  )
}
