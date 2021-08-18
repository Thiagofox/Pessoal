import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { saveTokensAndEmail } from '../helpers/handleLocalStorage';
import LSContext from '../context/LSContext';

function Login() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const { LSFunctions: { setEmail: setLSEmail } } = useContext(LSContext);

  function validateLogin() {
    const formLogin = document.querySelector('.form-login');
    setIsButtonDisabled(!formLogin.checkValidity());
  }

  return (
    <form className="form-login" onChange={ validateLogin }>
      <h1>Login</h1>
      <label htmlFor="email-input">
        <input
          type="text"
          data-testid="email-input"
          placeholder="Email"
          id="email-input"
          required
          pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
          onChange={ ({ target: { value } }) => (setEmail(value)) }
        />
      </label>
      <label htmlFor="password-input">
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          id="password-input"
          required
          pattern=".{7,}"
        />
      </label>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ isButtonDisabled }
          onClick={ () => saveTokensAndEmail(email, setLSEmail) }
        >
          Entrar
        </button>
      </Link>
    </form>
  );
}
export default Login;
