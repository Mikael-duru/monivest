import React, { useState } from 'react';
import "bootswatch/dist/materia/bootstrap.min.css";
import ShowAlert from '../component/ShowAlert';

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
      displayLoginDetails();
      ShowAlert("Login Successfully", "alert-success");
    } else {
      ShowAlert("Please Fill all Field", "alert-warning");
    }

  };

  const displayLoginDetails = () => {
    const display = document.querySelector('#display')

    const updateCard = document.createElement("div");
    updateCard.style.maxWidth = '30rem';
    updateCard.classList.add('card', 'mx-auto', 'mt-5');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.innerHTML = `
      <p className="card-text">
        Email: ${updatedemail}
      </p>
      <p className="card-text">
        Password: ${updatedpassword}
      </p>
    `
    updateCard.appendChild(cardBody);
    display.appendChild(updateCard)
  }

  const handleSubmit = (e) => e.preventDefault();



  return (
    <section className='container my-5 wrapper'>
      <div className="card mx-auto" style={{maxWidth: '30rem'}}>
        <form action="" className='p-4' onSubmit={handleSubmit}>
          <fieldset>
            <legend className='fs-1 lead text-center fw-bold mb-5 mt-5'>WELCOME BACK</legend>
            <div className="form-group  mt-4">
              <input type="email" className="form-control" id="LoginInputEmail" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={handleChangeEmail} />
            </div>
            <div className="form-group  mt-4">
              <input type="password" className="form-control" id="LoginInputPassword" placeholder="Password" value={password} onChange={handleChangePassword}/>
            </div>
            <p className="text-muted mt-4 fs-6 text-left">Forgot Password?</p>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-md btn-primary mt-4" onClick={handleClick}>Sign In</button>
            </div>
            <p className="text-muted text-center mt-5">OR</p>
            <div className="d-flex gap-4 justify-content-center mt-4">
              <button type="submit" className="btn  btn-md btn-primary">Facebook</button>
              <button type="submit" className="btn btn-md btn-primary">Google</button>
            </div>
            <p className="text-muted text-center mt-5">Don't have an Account? <button type="button" className="btn btn-link">Sign up</button></p>
          </fieldset>
        </form>
      </div>

      <div id="display"></div>

      {/* (email !== "" && password !== "" &&
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
      ) */}
    </section>
  );
}

export default Register;