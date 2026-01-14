import { useState } from "react";
import LogRegTemp from "./LogRegTemp";

function Login({onRegister , onMain}) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email: Email, password: Password }),
      });

      const data = await response.json();
      if(!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }
      setMessage("Login successful!");
      onMain();
    } catch (error) {
      setMessage("Cannot connect to server. Try again later.");
      console.error(error);
    }
  };


  return (
    <LogRegTemp
      title="Sign in with email"
      description="Track your courses, assignments, and academic progress in one place — completely free to use."
      child={
        <>
          <input type="text" placeholder="✉ Email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="🔒︎ Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
          <button className="login-submit-button" onClick={handleLogin}>Start Tracking</button>
          {message && <p className="error-message">{message}</p>} 
        </>
      }
      footer={
        <span onClick={onRegister}>Not registered yet?</span>
      }
    />
  );
}

export default Login;