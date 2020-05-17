import React from 'react'
import { connect } from 'react-redux'

import { toggleTransactionModal } from './store/actions'

function TransactionModal({ visabilityTransactionModal, hideTransactionModal }) {

  const closeModal = () => {
    hideTransactionModal()
  }

  return (
    <div className={`modal ${visabilityTransactionModal ? 'active' : ''}`} id="modal-id">
      <div className="modal-overlay" onClick={closeModal} aria-label="Close"></div>
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn btn-clear float-right" onClick={closeModal} aria-label="Close"></button>
          <div className="modal-title h5">Create transaction</div>
        </div>
        <div className="modal-body">
          <div className="content">
            <div className="form-group">
              <label className="form-label" htmlFor="input-amount">Amount</label>
              <input className="form-input" type="text" id="input-amount" placeholder="Amount" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="input-description">Description (optional)</label>
              <textarea className="form-input" id="input-description" placeholder="Description" rows="3"></textarea>
            </div>
            <div className="form-group">
              <select className="form-select">
                <option>Choose a category</option>
                <option>Category</option>
                <option>Category</option>
                <option>Category</option>
              </select>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-create">Create</button>
          <button className="btn btn-cancel" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  visabilityTransactionModal: state.rootReducer.visabilityTransactionModal
})

const mapDispatchToProps = dispatch => {
  return {
    hideTransactionModal: () => dispatch(toggleTransactionModal(false))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionModal)