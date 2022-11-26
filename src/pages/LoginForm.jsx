import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from "react-bootstrap";
import Quotes from '../component/Quotes';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const {id, value } = e.target;
    if (id === 'email') {
      setEmail(value)
    }
    if (id === 'password') {
      setPassword(value)
    }
    if (e.target.checked) {
      setRememberMe(value)
    } else {
      setRememberMe('')
    }
  }

  const handleClick = () => {
    if (email !== "" && password !== "") {
      setShowInput(true);
      setSuccess(true);
    }
      else {
      setError(true)
    }
  }

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className='container my-5 wrapper'>

      {(success) && 
        <div className="mx-auto mb-5" style={{maxWidth: '40rem'}}>
          <Alert variant="success" onClose={() => setSuccess(false)} dismissible><strong className='fs-5'><i className="fas fa-user-check text-white fs-4" />&nbsp; Registered Successfully</strong></Alert>
        </div> 
      }

      {(error) &&
        <div className="mx-auto mb-5" style={{maxWidth: '40rem'}}>
          <Alert variant="warning" className='fade show'  onClose={() => setError(false)} dismissible><strong className='fs-5'><i className="fa fa-exclamation-triangle text-white fs-4" />&nbsp; Please fill in correct details!</strong></Alert>
        </div>
      }

      <div className="card mx-auto" style={{maxWidth: '30rem'}}>

        <Quotes />

        <form action="" className='p-4' onSubmit={handleSubmit}>
          <fieldset>
            <legend className='fs-1 lead text-center fw-bold mb-5 mt-4'>WELCOME BACK</legend>
            <div className="form-group  mt-4">
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => handleChange(e)} />
            </div>
            <div className="d-flex justify-content-between">
              <div className="form-check  mt-4">
                <input className="form-check-input" type="checkbox" id="rememberMe" value='Keep me logged in' onChange={(e) => handleChange(e)} />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>
              <p className="text-muted mt-4 fs-6 text-left">
                  <Link className='card-link'>
                    Forgot Password?
                  </Link>
                </p>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-md btn-primary mt-5" onClick={handleClick}>Sign In</button>
            </div>
            <p className="text-muted text-center mt-5">
              Don't have an account? 
              <Link to='/register'>
                <button type="button" className="btn btn-link">Sign Up</button>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>

      {(showInput) &&
        <div className="card mx-auto mt-5" style={{maxWidth: '30rem'}}>
          <div className="card-body">
            <p className="card-text">
              Email: {email}
            </p>
            <p className="card-text">
              Password: {password}
            </p>
            <p className="card-text">
              {rememberMe}
            </p>
          </div>
        </div>
      } 
    </section>
  )
}

export default Login;