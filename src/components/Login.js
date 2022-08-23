import "./styles/Login.css";

function Login() {
  return (
    <section className="login">
      <form className="login__form">
        <div>
          <h2 className="login__title">Вход</h2>
          <input
            className="login__input"
            name="email"
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            className="login__input"
            name="password"
            type="password"
            placeholder="Пароль"
            required
          ></input>
        </div>
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
