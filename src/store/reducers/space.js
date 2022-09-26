import {
  // スペースモーダル
  OPEN_SPACE_MODAL,
  CLEAR_SPACE_MODAL,
} from '../actions/types'

const initialState = {
  open: false,
  data: null,
  modalType: -1,
}

const spaceReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    // オープンスペースモーダル
    case OPEN_SPACE_MODAL:
      return {
        ...state,
        open: payload.open,
        data: payload.data,
        modalType: payload.modalType,
      }

    // クリアスペースモーダル
    case CLEAR_SPACE_MODAL:
      return initialState

    default:
      return state
  }
}

export default spaceReducer
