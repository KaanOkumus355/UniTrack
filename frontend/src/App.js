import { useState } from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import Name from './Name';
import Main from './Main';

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

  return (
    <>
      <Header />

      {page === 'home' && <MiddleSection onLogin={() => setPage('login')} onRegister={() => setPage('register')}/>}
      {page === 'login' && <Login onRegister={() => setPage('register')}/>}
      {page === 'register' && <Register onLogin={() => setPage('login')} onName={() => setPage('name')}/>}
      {page === 'name' && <Name onMain={() => setPage('main')}/>}
      {page === 'main' && <Main />}

    </>
  );
}

export default App;

