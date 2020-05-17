import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import TransactionModal from './TransactionModal'

import { toggleTransactionModal } from './store/actions'

import '../styles/transaction.css'

function Transaction({ showTransactionModal }) {
  return (
    <div className="column col-12">
      <div className="header-transaction">
        <button className="btn btn-plus s-circle tooltip tooltip-left" onClick={showTransactionModal} data-tooltip="Create transaction"><FontAwesomeIcon icon={faPlus} size="lg" /></button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Categories</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>category category category</td>
            <td>56$</td>
            <td>xx-xx-xxxx</td>
          </tr>
          <tr>
            <td>category category</td>
            <td>100$</td>
            <td>xx-xx-xxxx</td>
          </tr>
        </tbody>
      </table>
      <TransactionModal />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    showTransactionModal: () => dispatch(toggleTransactionModal(true))
  }
}

export default connect(null, mapDispatchToProps)(Transaction);