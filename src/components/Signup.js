import { useState } from "react";

export default function Signup({
  usernameSignUp,
  passwordSignUp,
  repasswordSignUp,
  setUsernameSignUp,
  setPasswordSignUp,
  setRePasswordSignUp,
  SignupFun,
  signupForm,
  login,
  accounts,
  showWrong,
}) {
  let [showPassword, setShowPassword] = useState(false);
  let [showRePassword, setShowRePassword] = useState(false);

  return (
    <div className="container">
      <form className="login__form" onSubmit={SignupFun}>
        <center>
          <h3>Sign up</h3>
          <br />
        </center>
        <div className="lable__input">
          <label>Username</label>
          <input
            className={signupForm ? "" : "wrong"}
            value={usernameSignUp}
            onChange={(e) => setUsernameSignUp(e.target.value)}
            type="text"
          />
        </div>
        <div className="lable__input">
          <label>Password</label>
          <input
            className={signupForm ? "" : "wrong"}
            value={passwordSignUp}
            onChange={(e) => setPasswordSignUp(e.target.value)}
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
          <label>Re-Password</label>
          <input
            className={signupForm ? "" : "wrong"}
            value={repasswordSignUp}
            onChange={(e) => setRePasswordSignUp(e.target.value)}
            type={showRePassword ? "text" : "password"}
          />
          <span
            onClick={() =>
              setShowRePassword((showRePassword = !showRePassword))
            }
            className={`eye__show ${showRePassword ? "un__show" : ""}`}
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
          <label>
            {accounts.length > 0 && (
              <span className="newAccount" onClick={login}>
                already i have an account
              </span>
            )}
          </label>
          <button className="btn">Send Data</button>
        </div>
      </form>
    </div>
  );
}
