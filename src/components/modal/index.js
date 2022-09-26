import React, {useEffect, useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {clear_space_modal} from '../../store/actions/space'
import {View, Text, Button} from 'react-native'

import BottomSheet from '@gorhom/bottom-sheet'

const Modal = () => {
  const dispatch = useDispatch()
  const modalState = useSelector(state => state.space)
  const bottomSheetRef = useRef(null)

  useEffect(() => {
    if (modalState.open && bottomSheetRef.current) {
      bottomSheetRef.current.expand()
    }
  }, [modalState])

  const renderContent = () => {
    switch (modalState.modalType) {
      case 0:
        return <Text>test</Text>
      default:
        return <></>
    }
  }

  const onClose = () => {
    dispatch(clear_space_modal())
  }

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={['10%', '100%']}
      index={-1}
      onClose={onClose}
      handleHeight={40}
      enablePanDownToClose>
      {renderContent()}
    </BottomSheet>
  )
}

export default Modal
