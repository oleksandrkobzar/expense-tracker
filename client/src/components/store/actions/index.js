export const TRANSACTION_MODAL = 'TRANSACTION_MODAL'

export function toggleTransactionModal(visabilityTransactionModal) {
  return {
    type: TRANSACTION_MODAL,
    visabilityTransactionModal
  }
}

export const CATEGORY_MODAL = 'CATEGORY_MODAL'

export function toggleCategoryModal(visabilityCategoryModal) {
  return {
    type: CATEGORY_MODAL,
    visabilityCategoryModal
  }
}
