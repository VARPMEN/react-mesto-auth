import "./styles/SignStyles.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="sign">
      <form className="sign__form">
        <div>
          <h2 className="sign__title">Регистрация</h2>
          <input
            className="sign__input"
            name="email"
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            className="sign__input"
            name="password"
            type="password"
            placeholder="Пароль"
            required
          ></input>
        </div>
        <div>
          <button
            className="sign__button sign__button_type-register"
            type="submit"
          >
            Зарегистрироваться
          </button>
          <Link to="/sign-in" className="sign__link">
            <p className="sign__signup">Уже зарегистрированы? Войти</p>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
