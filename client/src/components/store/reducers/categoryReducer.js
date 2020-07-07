import { CREATE_CATEGORY, CATEGORY_MODAL, EDIT_CATEGORY, RESET_EDIT_CATEGORY } from './../actions/category'

const initialState = {
  visabilityCategoryModal: false,
  editingCategory: null
}

function categoryReducer(state = initialState, action) {
  if (action.type === CREATE_CATEGORY)
    return Object.assign({}, state, {})

  if (action.type === CATEGORY_MODAL)
    return Object.assign({}, state,
      { visabilityCategoryModal: action.payload })

  if (action.type === EDIT_CATEGORY)
    return Object.assign({}, state, { editingCategory: action.payload })

  if (action.type === RESET_EDIT_CATEGORY)
    return Object.assign({}, state, { editingCategory: initialState.editingCategory })

  return state
}

export default categoryReducer