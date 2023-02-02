import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post("/auth/register", inputs)
      navigate("/login")
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='auth'>
      <div className='bgcolor'>
        <h1>Register</h1>
        <form>
          <input required type="text" placeholder="username" name='username' onChange={handleChange} />
          <input required type="email" placeholder="email" name='email' onChange={handleChange} />
          <input required type="password" placeholder="password" name='password' onChange={handleChange} />
          <button onClick={handleSubmit}>Register</button>
          {error && <p>{error}</p>}
          <span>Existing User? <Link to="/login">Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register