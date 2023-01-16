import React from "react";
import "./Profile.css"
import { useHistory } from "react-router-dom";

function Profile({ onDataChangeUser }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const history = useHistory();
  
  const goBack = () => {
    history.push("/signin");
  };

  function onChangeName(evt) {
    setName(evt.target.value);
    // console.log(evt.target.value);
  }

  function onChangeEmail(evt) {
    setEmail(evt.target.value);
    // console.log(evt.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onDataChangeUser({
      email: email,
      name: name,
    });
  };

  return (
    <section className="profile">
      <div className="profile__wrapper">
        <p className="profile__welcome">{`Привет, ${name ? name : "Серго"}!`}</p>
        <form onSubmit={handleSubmit} className="profile__form">
            <div className="profile__input-wrapper">
                <label htmlFor="text" className="profile__label">Имя</label>
                <input
                className="profile__input"
                id="name-profile"
                required
                name="profile-name"
                type="text"
                value={name ? name : "Серго"}
                onChange={onChangeName}
                />
            </div>
            <div className="profile__line"></div>
            <div className="profile__input-wrapper">
                <label htmlFor="email" className="profile__label">E-mail</label>
                <input
                className="profile__input"
                id="email-profile"
                required
                name="profile-email"
                type="email"
                value={email ? email : "Sergo@email.ru"}
                onChange={onChangeEmail}
                />
            </div>
            <button type="submit" className="profile__button">
                Редактировать
            </button>
            <button onClick={goBack} className="profile__link">Выйти из аккаунта</button>
            {/* <Link to="/sign-in" className="login__link-register">
            Уже зарегистрированы? Войти
            </Link> */}
        </form>
      </div>
    </section>
  );
}

export default Profile;