import './App.css';

function Header() {
  return (
    <div className="header">
      <img src="UniTrackLogo.png" alt="UniTrack Logo" className="logo" /> 
      <h1>UniTrack</h1>
    </div>
  );
}

function MiddleSection() {
  return (
    <div className="middle-section">
      <h2>Welcome to UniTrack</h2>
      <p>Your ultimate university management system.</p>
      <div className="middle-section-buttons">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}



function App() {
  return (
    <>
      <Header />
      <MiddleSection />
    </>
  );
}

export default App;

