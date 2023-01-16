import React from "react";
import "./Register.css"
import { Link } from "react-router-dom";
import LoginImage from "../images/logo_King_Movie.svg"
import Error from "./error/Error.js";

function Register({ onAddUser }) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");

  const error = "что то пошло не так..."

  function onChangeName(evt) {
    setName(evt.target.value);
    // console.log(evt.target.value);
  }

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

    onAddUser({
      name: name,
      email: email,
      password: password,
    });

    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <section className="login">
      <div className="login__wrapper">
        <img src={LoginImage} className="login__image" alt="логотип" />
        <p className="login__welcome">Добро пожаловать!</p>
        <form onSubmit={handleSubmit} className="login__form">
            <label htmlFor="text" className="login__label">Имя</label>
            <input
            className="login__input"
            id="name-register"
            required
            name="login-email"
            type="text"
            value={name}
            onChange={onChangeName}
            />
            <label htmlFor="email" className="login__label">E-mail</label>
            <input
            className="login__input"
            id="email-register"
            required
            name="login-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <label htmlFor="password" className="login__label">Пароль</label>
            <input
            className="login__input"
            id="password-register"
            required
            name="login-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            />
            <Error errorText={error} />
            <button type="submit" className="login__button">
            Зарегистрироваться
            </button>
            <div className="login__link-wrapper">
              <p className="login__link-title">Уже зарегистрированы?</p>
              <Link to="/signin" className="login__link-register">
              Войти
              </Link>
            </div>
        </form>
      </div>
    </section>
  );
}

export default Register;