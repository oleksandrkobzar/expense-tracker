import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'

import './../styles/login.css'

function Signup() {
  return (
    <div className="form-login">
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faAt} /></span>
        <input className="form-input" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$" placeholder="Login"/>
      </div>
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faLock} /></span>
        <input className="form-input" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" placeholder="Password"/>
      </div>
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faLock} /></span>
        <input className="form-input" type="password" pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" placeholder="Repeat password"/>
      </div>
      <button className="btn btn-login" type="submit">Sign up</button>
      Already have an account? <Link to="/login">Login</Link>
    </div>
  )  
}

export default Signup