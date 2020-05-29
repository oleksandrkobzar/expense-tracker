import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons'
import axios from '../api'

import './../styles/login.css'

function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const clickButtonLogin = () => {
    if(username !== '' && password !== ''){
      axios.post('login', { username, password })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  }
    
  return (
    <div className="form-login">
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faAt} /></span>
        <input 
          className="form-input" 
          type="text" 
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$" 
          placeholder="Login" 
          onChange={(event => setUserName(event.target.value))} />
      </div>
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faLock} /></span>
        <input 
          className="form-input" 
          type="password" 
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" 
          placeholder="Password"
          onChange={(event => setPassword(event.target.value))} />
      </div>
      <button className="btn btn-login" type="submit" onClick={clickButtonLogin}>Login</button>
      Don't have account? <Link to="/signup">Sign up</Link>
    </div>
  )  
}

export default Login
