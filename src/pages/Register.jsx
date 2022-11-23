import React, { useState } from 'react';
import "bootswatch/dist/materia/bootstrap.min.css";
import ShowAlert from '../component/ShowAlert';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState('');

  const [inputname, setInputName] = useState(name);
  const [inputemail, setInputEmail] = useState(email);
  const [inputpassword, setInputPassword] = useState(password);
  const [inputconfirmPassword, setInputConfirmPassword] = useState(confirmPassword);
  const [inputacceptTerms, setInputAcceptTerms] = useState(acceptTerms);

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangeAcceptTerms = (event) => {
    setAcceptTerms(event.target.value);
  };

  const handleClick = () => {
    if (name !== "" && email !== "" && password !== "" && confirmPassword !== "" && password !== confirmPassword ) {
      setInputName(name)
      setInputEmail(email);
      setInputPassword(password);
      setInputConfirmPassword(confirmPassword);
      setInputAcceptTerms(acceptTerms);
    } else {
      ShowAlert("Please Fill all Field", "alert-warning")
    }
  };
  

  const handleSubmit = (e) => e.preventDefault();
  return (
    <section className='container my-5'>
      <div className="card mx-auto" style={{maxWidth: '30rem'}}>
        <form action="" className='p-4' onSubmit={handleSubmit}>
          <fieldset>
            <legend className='fs-1 ead text-center fw-bold mb-5 mt-5'>CREATE ACCOUNT</legend>
            <div className="form-group">
              <input type="text" className="form-control" id="InputName" placeholder="Enter Name" value={name} onChange={handleChangeName} />
            </div>
            <div className="form-group  mt-4">
              <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={handleChangeEmail} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="InputPassword" placeholder="Password" value={password} onChange={handleChangePassword} />
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="InputPassword2" placeholder="Confirm Password" value={confirmPassword} onChange={handleChangeConfirmPassword} />
            </div>
            <div className="form-check  mt-4">
              <input className="form-check-input" type="checkbox" value={acceptTerms} id="flexCheckDefault" onChange={handleChangeAcceptTerms} />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I accept the <span className="text-primary">Terms & Conditions</span>
              </label>
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-md btn-primary mt-5" onClick={handleClick}>Sign Up</button>
            </div>
            <p className="text-muted text-center mt-5">Already have an account? <button type="button" className="btn btn-link">Sign in</button></p>
          </fieldset>
        </form>
      </div>

      <div className="card mx-auto mt-5" style={{maxWidth: '30rem'}}>
          <div className="card-body">
            <p className="card-text">
              Name: {inputname}
            </p>
            <p className="card-text">
              Email: {inputemail}
            </p>
            <p className="card-text">
              Password: {inputpassword}
            </p>
            <p className="card-text">
              Confirm Password: {inputconfirmPassword}
            </p>
            <p className="card-text">
              Accept Terms & Conditions: {inputacceptTerms}
            </p>
          </div>
        </div>
    </section>
  );
}

export default Register;