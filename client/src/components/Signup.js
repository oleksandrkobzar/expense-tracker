import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLock, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import axios from '../api'

import './../styles/login.css'

function Signup() {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [usernameIsCorrect, setUsernameIsCorrect] = useState(false)
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(false)
  const [repeatPasswordIsCorrect, setRepeatPasswordIsCorrect] = useState(false)

  const onChangeUsername = event => {
    if (event.target.value !== '') {
      setUserName(event.target.value)
      setUsernameIsCorrect(true)
    } else setUsernameIsCorrect(false)
  }

  const onChangePassword = event => {
    if (event.target.value !== '') {
      setPassword(event.target.value)
      setPasswordIsCorrect(true)
    } else setPasswordIsCorrect(false)
  }

  const onChangeRepeatPassword = event => {
    if (event.target.value !== '') {
      setRepeatPassword(event.target.value)
      setRepeatPasswordIsCorrect(true)
    } else setRepeatPasswordIsCorrect(false)
  }

  const clickButtonSingUp = event => {
    if (usernameIsCorrect && passwordIsCorrect && repeatPasswordIsCorrect)
      axios.post('singup', { username, password, repeatPassword })
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
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
          onChange={onChangeUsername} />
        <span className="input-group-addon">
          {usernameIsCorrect ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}
        </span>
      </div>
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faLock} /></span>
        <input
          className="form-input"
          type="password"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
          placeholder="Password"
          onChange={onChangePassword} />
        <span className="input-group-addon">
          {passwordIsCorrect ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}
        </span>
      </div>
      <div className="input-group">
        <span className="input-group-addon"><FontAwesomeIcon icon={faLock} /></span>
        <input
          className="form-input"
          type="password"
          pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
          placeholder="Repeat password"
          onChange={onChangeRepeatPassword} />
        <span className="input-group-addon">
          {repeatPasswordIsCorrect ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />}
        </span>
      </div>
      <button className="btn btn-login" type="submit" onClick={clickButtonSingUp}>Sign up</button>
      Already have an account? <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup