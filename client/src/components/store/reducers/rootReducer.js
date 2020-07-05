import { TRANSACTION_MODAL, SET_CATEGORIES } from './../actions'

const initialState = {
  visabilityTransactionModal: false,
  categories: []
}

function rootReducer(state = initialState, action) {
  if (action.type === TRANSACTION_MODAL)
    return Object.assign({}, state, { visabilityTransactionModal: action.payload })

  if (action.type === SET_CATEGORIES)
    return Object.assign({}, state, { categories: action.payload })

  return state
}

export default rootReducer