import api from './../../../api'

export const TRANSACTION_MODAL = 'TRANSACTION_MODAL'
export const SET_CATEGORIES = 'SET_CATEGORIES'

export function toggleTransactionModal(payload) {
  return { type: TRANSACTION_MODAL, payload }
}

export function setCategories(payload) {
  return { type: SET_CATEGORIES, payload }
}

export function fetchCategories() {
  return dispatch => api
    .get('category')
    .then(res => dispatch(setCategories(res.data.data)))
    .catch(err => console.log(err))
}
