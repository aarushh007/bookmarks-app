import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./base";

function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const Login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div className="auth">
      {user ? (
        <Link to="/" className="home_link">
          Home
        </Link>
      ) : (
        <div>
          <h2>Login</h2>
          <form class="pure-form">
            <fieldset>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
              />
              <button
                onClick={Login}
                type="submit"
                class="pure-button pure-button-primary"
              >
                Login
              </button>
            </fieldset>
          </form>
          <br />
          <h2>Sign up</h2>
          <form class="pure-form">
            <fieldset>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
              />
              <button
                onClick={signup}
                type="submit"
                class="pure-button pure-button-primary"
              >
                Sign up
              </button>
            </fieldset>
          </form>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
