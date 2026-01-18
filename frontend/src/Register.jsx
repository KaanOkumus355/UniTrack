import { useState } from "react";
import LogRegTemp from "./LogRegTemp";

function Register({onLogin, onMain, setUsername, setUserId}) {
  const [localUsername, setLocalUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ username: localUsername, email: Email, password: Password }),
      });

      const data = await response.json();
      if(!response.ok) {
        setMessage(data.message || "Registration failed");
        return;
      }
      setUsername(data.username || localUsername);
      setUserId(data.user_id);
      setMessage("Registration successful!");
      onMain();
    } catch (error) {
      setMessage("Cannot connect to server. Try again later.");
      console.error(error);
    }
  };
  return (
    <LogRegTemp
      title="Create your account"
      description="Create an account to start tracking your courses and progress."
      child={
        <>
        <input type="text" placeholder="👤 Name or Username" value={localUsername} onChange={(e) => setLocalUsername(e.target.value)}/>
        <input type="text" placeholder="✉ Email" value={Email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="🔒︎ Password" value={Password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="Register-submit-button" onClick={handleRegister}>Register Now</button>
        {message && <p className="error-message">{message}</p>}
        </>
      }
      footer={
        <span onClick={onLogin}>Already have an account?</span>
      }
    />
  );
}

export default Register;