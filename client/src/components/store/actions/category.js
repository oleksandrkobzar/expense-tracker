import api from './../../../api'
import { fetchCategories } from './index'

export const CATEGORY_MODAL = 'CATEGORY_MODAL'
export const CREATE_CATEGORY = 'CREATE_CATEGORY'
export const EDIT_CATEGORY = 'EDIT_CATEGORY'
export const RESET_EDIT_CATEGORY = 'RESET_EDIT_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'

export function toggleCategoryModal(payload) {
  return { type: CATEGORY_MODAL, payload }
}

export function editCategory(payload) {
  return { type: EDIT_CATEGORY, payload }
}

export function resetEditCategory() {
  return { type: RESET_EDIT_CATEGORY }
}

export function createCategory(title, background) {
  return dispatch => api
    .post('category', { title, background })
    .then(res => {
      dispatch({ type: CREATE_CATEGORY })
      dispatch(fetchCategories())
    })
    .catch(err => console.log(err))
}

export function updateCategory(id, title, background) {
  console.log(id, title, background)
  return dispatch => api
    .put(`category/${id}`, { title, background })
    .then(res => {
      dispatch({ type: UPDATE_CATEGORY })
      dispatch(fetchCategories())
    })
    .catch(err => console.log(err))
}

export function deleteCategory(id) {
  return dispatch => api
    .delete(`category/${id}`)
    .then(res => {
      dispatch({ type: DELETE_CATEGORY })
      dispatch(fetchCategories())
    })
    .catch(err => console.log(err))
}