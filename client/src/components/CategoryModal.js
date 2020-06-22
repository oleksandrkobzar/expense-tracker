import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TwitterPicker } from 'react-color'

import { toggleCategoryModal } from './store/actions/index'

function CategoryModal({ visabilityCategoryModal, hideCategoryModal }) {

  const [background, setBackground] = useState('#FF6900')

  const handleChangeComplete = color => {
    setBackground(color.hex)
  }

  const closeModal = () => {
    hideCategoryModal()
  }

  return (
    <div className={`modal ${visabilityCategoryModal ? 'active' : ''}`} id="modal-id">
      <div className="modal-overlay" onClick={closeModal} aria-label="Close"></div>
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn btn-clear float-right" onClick={closeModal} aria-label="Close"></button>
          <div className="modal-title h5">Create category</div>
        </div>
        <div className="modal-body">
          <div className="content">
            <div className="form-group">
              <label className="form-label" htmlFor="input-title">Title</label>
              <input className="form-input" type="text" id="input-title" placeholder="Title" />
            </div>
            <TwitterPicker
              color={background}
              onChangeComplete={handleChangeComplete}
              triangle='hide'
              width='100%' />
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
  visabilityCategoryModal: state.rootReducer.visabilityCategoryModal
})

const mapDispatchToProps = dispatch => ({
  hideCategoryModal: () => dispatch(toggleCategoryModal(false))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal)