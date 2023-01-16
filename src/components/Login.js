import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import LoginImage from "../images/logo_King_Movie.svg"

function Login({ onAuthorizedUser }) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  function onChangePassword(evt) {
    setPassword(evt.target.value);
    // console.log(evt.target.value);
  }

  function onChangeEmail(evt) {
    setEmail(evt.target.value);
    // console.log(evt.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAuthorizedUser({
      email: email,
      password: password,
    });

    setPassword("");
    setEmail("");
  };

  return (
    <section className="login">
      <div className="login__wrapper">
        <img src={LoginImage} className="login__image" alt="логотип" />
        <p className="login__welcome">Рады видеть!</p>
        <form onSubmit={handleSubmit} className="login__form">
            <label htmlFor="email" className="login__label">E-mail</label>
            <input
            className="login__input"
            id="email-authorized"
            required
            name="login-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <label htmlFor="password" className="login__label">Пароль</label>
            <input
            className="login__input"
            id="password-authorized"
            required
            name="login-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            />
            <button type="submit" className="login__button">
            Войти
            </button>
            <div className="login__link-wrapper">
              <p className="login__link-title">Ещё не зарегистрированы?</p>
              <Link to="/signup" className="login__link-register">
              Регистрация
              </Link>
            </div>
        </form>
      </div>
    </section>
  );
}

export default Login;