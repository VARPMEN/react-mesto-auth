import "./styles/SignStyles.css";

function Login() {
  return (
    <section className="sign">
      <form className="sign__form">
        <div>
          <h2 className="sign__title">Вход</h2>
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
        <button className="sign__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
