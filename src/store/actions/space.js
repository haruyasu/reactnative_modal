import {
  // スペースモーダル
  OPEN_SPACE_MODAL,
  CLEAR_SPACE_MODAL,
} from './types'

// オープン
export const open_space_modal = (open, data) => dispatch => {
  console.log('open_space_modal')

  return dispatch({
    type: OPEN_SPACE_MODAL,
    payload: {
      open,
      data,
      modalType: 0,
    },
  })
}

// クリア
export const clear_space_modal = () => async dispatch => {
  console.log('clear_space_modal')

  return dispatch({
    type: CLEAR_SPACE_MODAL,
  })
}
