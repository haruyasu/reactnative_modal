import React, {useRef, useMemo, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Modal = () => {
  const bottomSheetModalRef = useRef(null);
  const snapPoints = useMemo(() => ['20%', '100%'], []);

  const handleOpen = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <Button onPress={handleOpen} title="Open" color="red" />
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Text>Awesome 🎉</Text>
          <Button onPress={handleClose} title="Close" color="blue" />
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default Modal;
