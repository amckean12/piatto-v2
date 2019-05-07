import React from 'react';
import logo from './logo.svg';
import './App.css';
import InitialUserActionsContainer from './app/splash-page/containers/login-and-new-user-container' //Rename File
import TitleComponent from './app/splash-page/components/title-component'

function App() {
  return (
    <div className="Piatto">
      <TitleComponent />
      <InitialUserActionsContainer />
    </div>
  );
}

export default App;
