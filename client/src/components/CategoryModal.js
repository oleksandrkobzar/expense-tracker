import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { TwitterPicker } from 'react-color'

import { createCategory, updateCategory, deleteCategory, toggleCategoryModal, resetEditCategory } from './store/actions/category'

function CategoryModal({ visabilityCategoryModal, toggleCategoryModal, createCategory, editingCategory, updateCategory, deleteCategory, resetEditCategory }) {

  const [background, setBackground] = useState('#FF6900')
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (editingCategory) {
      setTitle(editingCategory.title)
      setBackground(editingCategory.background)
    }
  }, [editingCategory, visabilityCategoryModal])

  const handleChangeComplete = color =>
    setBackground(color.hex)

  const changeCategoryTitle = event => {
    let title = event.target.value
    if (title !== '') setTitle(title)
  }

  const createCategoryBtn = () => {
    createCategory(title, background)
    closeModal()
  }

  const updateCategoryBtn = () => {
    updateCategory(editingCategory._id, title, background)
    closeModal()
  }

  const deleteCategoryBtn = () => {
    deleteCategory(editingCategory._id)
    closeModal()
  }

  const closeModal = () => {
    toggleCategoryModal(false)
    setBackground('#FF6900')
    setTitle('')
    if(editingCategory) resetEditCategory()
  }

  return (
    <div className={`modal ${(visabilityCategoryModal) ? 'active' : ''}`} id="modal-id">
      <div className="modal-overlay" onClick={closeModal} aria-label="Close"></div>
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn btn-clear float-right" onClick={closeModal} aria-label="Close"></button>
          <div className="modal-title h5">{editingCategory ? 'Update category' : 'Create category'}</div>
        </div>
        <div className="modal-body">
          <div className="content">
            <div className="form-group">
              <label className="form-label" htmlFor="input-title">Title</label>
              <input
                className="form-input"
                type="text"
                id="input-title"
                value={title}
                onChange={changeCategoryTitle}
                placeholder="Title" />
            </div>
            <TwitterPicker
              color={background}
              onChangeComplete={handleChangeComplete}
              triangle='hide'
              width='100%' />
          </div>
        </div>
        <div className="modal-footer btn-group">
          {
            editingCategory ? <button className="btn btn-create" onClick={updateCategoryBtn}>Update</button>
              : <button className="btn btn-create" onClick={createCategoryBtn}>Create</button>
          }
          { editingCategory ? <button className="btn btn-cancel" onClick={deleteCategoryBtn}>Delete</button> : null }
          <button className="btn btn-cancel" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  visabilityCategoryModal: state.categoryReducer.visabilityCategoryModal,
  editingCategory: state.categoryReducer.editingCategory
})

const mapDispatchToProps = dispatch => ({
  resetEditCategory: () => dispatch(resetEditCategory()),
  deleteCategory: id => dispatch(deleteCategory(id)),
  updateCategory: (id, title, background) => dispatch(updateCategory(id, title, background)),
  toggleCategoryModal: visible => dispatch(toggleCategoryModal(visible)),
  createCategory: (title, background) => dispatch(createCategory(title, background))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryModal)