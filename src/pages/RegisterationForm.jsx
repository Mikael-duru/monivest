import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from "react-bootstrap";

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const {id, value } = e.target;
    if (id === 'name') {
      setName(value)
    }
    if (id === 'email') {
      setEmail(value)
    }
    if (id === 'password') {
      setPassword(value)
    }
    if (id === 'confirmPassword') {
      setConfirmPassword(value)
    }
    if (e.target.checked) {
      setAcceptTerms(value)
    } else {
      setAcceptTerms('')
    }
  }

  const handleClick = () => {
    if (name !== "" && email !== "" && password !== "" && confirmPassword !== "" && (password === confirmPassword) && acceptTerms !== "") {
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
        <form action="" className='px-4 py-2' onSubmit={handleSubmit}>
          <fieldset>
            <legend className='fs-1 lead text-center fw-bold my-5'>CREATE ACCOUNT</legend>
            <div className="form-group">
              <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group  mt-4">
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={(e) => handleChange(e)} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-check  mt-4">
              <input className="form-check-input" type="checkbox" id="acceptTerms" value='I accept the Terms & Conditions' onChange={(e) => handleChange(e)} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I accept the <Link className="card-link">Terms & Conditions</Link>
              </label>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-md btn-primary mt-5" onClick={handleClick}>Sign Up</button>
            </div>
            <p className="text-muted text-center mt-5">
              Already have an account? 
              <Link to='/login'>
                <button type="button" className="btn btn-link">Sign in</button>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>

      {(showInput) &&
        <div className="card mx-auto mt-5" style={{maxWidth: '30rem'}}>
          <div className="card-body">
            <p className="card-text">
              Name: {name}
            </p>
            <p className="card-text">
              Email: {email}
            </p>
            <p className="card-text">
              Password: {password}
            </p>
            <p className="card-text">
              Confirm Password: {confirmPassword}
            </p>
            <p className="card-text">
              Agreement: {acceptTerms}
            </p>
          </div>
        </div>
      } 
    </section>
  )
}

export default Register;