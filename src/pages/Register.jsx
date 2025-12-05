import { useState } from "react";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");

  // Условия ошибки:
  const isInvalidEmail =
    (email.length > 0 && !email.includes("@")) || // нет @
    email.indexOf("@") === 0;                    // @ стоит первым

  return (
    <div className="register-wrapper">
      <div className="register-page">
        <h1>Реєстрація</h1>

        <form className="register-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isInvalidEmail ? "input-error" : ""}
          />

          <input type="password" placeholder="Пароль" />

          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
