function Login({ home }) {
  return (
    <div className="loginpage">
      <span className="back-link" onClick={home}>Back to Home Page</span>
      <h1>Login</h1>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button>Submit</button>
    </div>
  );
}

export default Login;