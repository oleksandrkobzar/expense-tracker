import { TRANSACTION_MODAL, CATEGORY_MODAL } from './../actions'

const initialState = {
  visabilityTransactionModal: false,
  visabilityCategoryModal: false
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_MODAL:
      return Object.assign({}, state, { visabilityTransactionModal: action.visabilityTransactionModal })

    case CATEGORY_MODAL:
      return Object.assign({}, state, { visabilityCategoryModal: action.visabilityCategoryModal })

    default:
      return state
  }
}

export default rootReducer