import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header className="Header" />
      <div className="App__row">
        {/* <div className="App__aside">Sidebar</div> */}
        <div>Main</div>
      </div>
    </div>
  );
}

export default App;
