import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShowAlert from '../component/ShowAlert';
import Quotes from '../component/Quotes'

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [updatedemail, setUpdatedEmail] = useState(email);
  const [updatedpassword, setUpdatedPassword] = useState(password);


  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    
    if (email !== "" && password !== "") {
      setUpdatedEmail(email);
      setUpdatedPassword(password);
      ShowAlert("Login Successfully", "alert-success")
    } else {
      ShowAlert("Please Fill all Field", "alert-warning")
    }

  };

  const handleSubmit = (e) => e.preventDefault();



  return (
    <section className='container my-5'>
      <div className="card mx-auto" style={{maxWidth: '30rem'}}>
        <Quotes />
        <form action="" className='p-4' onSubmit={handleSubmit}>
          <fieldset>
            <legend className='fs-1 lead text-center fw-bold mb-5 mt-4'>WELCOME BACK</legend>
            <div className="form-group  mt-4">
              <input type="email" className="form-control" id="LoginInputEmail" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={handleChangeEmail} />
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="LoginInputPassword" placeholder="Password" value={password} onChange={handleChangePassword}/>
            </div>
            <p className="text-muted mt-4 fs-6 text-left">
            <Link className='card-link'>
              Forgot Passwod?
            </Link>
            </p>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-md btn-primary mt-4" onClick={handleClick}>Sign In</button>
            </div>
            <p className="text-muted text-center mt-5">OR</p>
            <div className="d-flex gap-4 justify-content-center mt-4">
              <button type="submit" className="btn  btn-md btn-primary">Facebook</button>
              <button type="submit" className="btn btn-md btn-primary">Google</button>
            </div>
            <p className="text-muted text-center mt-5">
              Don't have an Account? 
              <Link to="/register">
              <button type="button" className="btn btn-link">Sign up</button>
              </Link>
            </p>
          </fieldset>
        </form>
      </div>

      <div className="card mx-auto mt-5" style={{maxWidth: '30rem'}}>
        <div className="card-body">
          <p className="card-text">
            Email: {updatedemail}
          </p>
          <p className="card-text">
            Password: {updatedpassword}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;