import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { fetchCategories } from './store/actions/index'
import { toggleCategoryModal, editCategory } from './store/actions/category'

import CategoryModal from './CategoryModal'

import '../styles/category.css'

function Category({ toggleCategoryModal, categories, fetchCategories, editCategory }) {

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  const editCategoryBtn = id => {
    editCategory(categories.find(category => category._id === id))
    toggleCategoryModal(true)
  }

  return (
    <div className="column col-12">
      <div className="header-category">
        <button className="btn btn-plus s-circle tooltip tooltip-left" onClick={() => toggleCategoryModal(true)} data-tooltip="Create category"><FontAwesomeIcon icon={faPlus} size="lg" /></button>
      </div>
      <div>
        {categories.map(({ _id, title, background }) => <span key={_id} onClick={() => editCategoryBtn(_id)} className="label label-rounded" style={{ backgroundColor: background }}>{title}</span>)}
      </div>
      <CategoryModal />
    </div>
  )
}

const mapStateToProps = state => ({
  categories: state.rootReducer.categories
})

const mapDispatchToProps = dispatch => ({
  editCategory: category => dispatch(editCategory(category)),
  toggleCategoryModal: visible => dispatch(toggleCategoryModal(visible)),
  fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)