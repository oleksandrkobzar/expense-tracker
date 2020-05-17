import { TRANSACTION_MODAL } from './../actions'

const initialState = {
  visabilityTransactionModal: false
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TRANSACTION_MODAL:
      return Object.assign({}, state, { visabilityTransactionModal: action.visabilityTransactionModal })

    default:
      return state
  }
}

export default rootReducer