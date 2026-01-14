import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Main from './Main';
import AddExam from './AddExam';

function Header() {
  return (
    <div className="header">
      <img src="UniTrackLogo.png" alt="UniTrack Logo" className="logo" /> 
      <h1>UniTrack</h1>
    </div>
  );
}

function MiddleSection({ onLogin, onRegister }) {
  return (
    <div className="middle-section">
      <h2>Welcome to UniTrack</h2>
      <p>Your ultimate university management system.</p>
      <div className="middle-section-buttons">
        <button className="login-button" onClick={onLogin}>Login</button>
        <button className="register-button" onClick={onRegister}>Register</button>
      </div>
    </div>
  );
}



function App() {
  const [page, setPage] = useState('home');
  const [username, setUsername] = useState("");

  return (
    <>
      <Header />

      {page === 'home' && <MiddleSection onLogin={() => setPage('login')} onRegister={() => setPage('register')} setUsername={setUsername}/>}
      {page === 'login' && <Login onRegister={() => setPage('register')} onMain={() => setPage('main')} setUsername={setUsername}/>}
      {page === 'register' && <Register onLogin={() => setPage('login')} onMain={() => setPage('main')} setUsername={setUsername}/>}
      {page === 'main' && <Main username={username} onAddExam={() => setPage('addExam')} />}
      {page === 'addExam' && <AddExam onMain={() => setPage('main')} />}

      </>
  );
}

export default App;