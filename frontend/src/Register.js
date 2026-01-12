import LogRegTemp from "./LogRegTemp";

function Register({onLogin, onName}) {
  return (
    <LogRegTemp
      title="Create your account"
      description="Create an account to start tracking your courses and progress."
      child={
        <>
        <input type="text" placeholder="✉ Email"/>
        <input type="password" placeholder="🔒︎ Password"/>
        <input type="password" placeholder="🔒︎ Confirm Password"/>
        <button className="Register-submit-button" onClick={onName}>Register Now</button>
        </>
      }
      footer={
        <span onClick={onLogin}>Already have an account?</span>
      }
    />
  );
}

export default Register;