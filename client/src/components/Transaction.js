import React from 'react'

import '../styles/transaction.css'

function Transaction() {
  return (
    <div className="column col-12">
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
      <div className="modal" id="modal-id">
        <a href="#close" className="modal-overlay" aria-label="Close"></a>
        <div className="modal-container">
          <div className="modal-header">
            <a href="#close" className="btn btn-clear float-right" aria-label="Close"></a>
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
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction;