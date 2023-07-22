import { useState } from "react";
export default function Login({
  usernameLogin,
  setUsernameLogin,
  passwordLogin,
  setPasswordLogin,
  LoginFun,
  newAccount,
  logninForm,
  showWrong
}) {
  let [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container">
      <form className="login__form" onSubmit={LoginFun}>
        <center>
          <h3>Login</h3>
          <br />
        </center>
        <div className="lable__input">
          <label>Username</label>
          <input
            className={logninForm ? "" : "wrong"}
            value={usernameLogin}
            onChange={(e) => setUsernameLogin(e.target.value)}
            type="text"
          />
        </div>
        <div className="lable__input">
          <label>Password</label>
          <input
            className={logninForm ? "" : "wrong"}
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          <span
            onClick={() => setShowPassword((showPassword = !showPassword))}
            className={`eye__show ${showPassword ? "un__show" : ""}`}
          >
            👁
          </span>
        </div>
        <div className="lable__input">
          <label></label>
          {showWrong && (
            <p className="tryAgain">Somthing is wrong! Try again</p>
          )}
        </div>
        <div className="lable__input">
          <label></label>
          <button className="btn">Send Data</button>
          <span className="newAccount" onClick={newAccount}>
            Create an new account
          </span>
        </div>
      </form>
    </div>
  );
}
