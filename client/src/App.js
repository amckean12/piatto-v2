import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginContainer from './app/splash-page/containers/login-container'
import TitleComponent from './app/splash-page/components/title-component'

function App() {
  return (
    <div className="Piatto">
      <TitleComponent />
      <LoginContainer />
    </div>
  );
}

export default App;
