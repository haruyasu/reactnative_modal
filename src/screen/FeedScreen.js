import React from 'react'
import {View, Text, Button} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {open_space_modal} from '../store/actions/space'

const FeedScreen = () => {
  const dispatch = useDispatch()

  const tmp = {
    abc: '1234',
  }

  return (
    <View>
      <Text>FeedScreen</Text>
      <Button
        title="Open Modal"
        onPress={() => dispatch(open_space_modal(true, tmp))}
      />
    </View>
  )
}

export default FeedScreen
