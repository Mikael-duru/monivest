import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootswatch/dist/materia/bootstrap.min.css";
import ShowAlert from '../component/ShowAlert';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState('');
  const [showInput, setShowInput] = useState(false)

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
      ShowAlert("Registered Successfully", "alert-success");
    }
      else {
    ShowAlert("Please Fill in complete and correct credentials", "alert-warning")
    }
  }

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className='container my-5 wrapper'>
      <div className="card mx-auto" style={{maxWidth: '30rem'}}>
        <form action="" className='p-4' onSubmit={handleSubmit}>
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