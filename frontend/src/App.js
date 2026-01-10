import { useState } from 'react';
import './App.css';
import Login from './Login';

function Header() {
  return (
    <div className="header">
      <img src="UniTrackLogo.png" alt="UniTrack Logo" className="logo" /> 
      <h1>UniTrack</h1>
    </div>
  );
}

function MiddleSection({ onLogin }) {
  return (
    <div className="middle-section">
      <h2>Welcome to UniTrack</h2>
      <p>Your ultimate university management system.</p>
      <div className="middle-section-buttons">
        <button className="login-button" onClick={onLogin}>Login</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}



function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header />

      {page === 'home' && <MiddleSection onLogin={() => setPage('login')}/>}

      {page === 'login' && <Login home={() => setPage('home')}/>}
    </>
  );
}

export default App;

