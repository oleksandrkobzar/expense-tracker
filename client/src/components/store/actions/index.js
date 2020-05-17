export const TRANSACTION_MODAL = 'TRANSACTION_MODAL'

export function toggleTransactionModal(visabilityTransactionModal) {
  return {
    type: TRANSACTION_MODAL,
    visabilityTransactionModal
  }
}
