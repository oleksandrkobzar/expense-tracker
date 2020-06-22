import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import { toggleCategoryModal } from './store/actions/index'

import CategoryModal from './CategoryModal'

import '../styles/category.css'

function Category({ showCategoryModal }) {

  return (
    <div className="column col-12">
      <div className="header-category">
        <button className="btn btn-plus s-circle tooltip tooltip-left" onClick={showCategoryModal} data-tooltip="Create category"><FontAwesomeIcon icon={faPlus} size="lg" /></button>
      </div>
      <CategoryModal />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    showCategoryModal: () => dispatch(toggleCategoryModal(true))
})

export default connect(null, mapDispatchToProps)(Category)