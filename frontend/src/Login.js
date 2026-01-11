import LogRegTemp from "./LogRegTemp";

function Login({onRegister}) {
  return (
    <LogRegTemp
      title="Sign in with email"
      description="Track your courses, assignments, and academic progress in one place — completely free to use."
      child={
        <>
          <input type="text" placeholder="✉ Email"/>
          <input type="password" placeholder="🔒︎ Password"/>
          <button className="login-submit-button">Start Tracking</button>
        </>
      }
      footer={
        <span onClick={onRegister}>Not registered yet?</span>
      }
    />
  );
}

export default Login;