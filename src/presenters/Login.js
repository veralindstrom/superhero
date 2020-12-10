import React, { useEffect } from 'react';
import Home from '../view/home';
import LoginView from '../view/LoginView';

const Login = (props) => {
  const {
    authListener,
    user,
    handleLogOut,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  useEffect(() => {
    authListener();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      {user ? (
        <div>
          <Home handleLogOut={handleLogOut} />
        </div>
      ) : (
          <LoginView
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignUp={handleSignUp}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />)}
    </div>
  );
}
export default Login;