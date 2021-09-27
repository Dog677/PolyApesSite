import React from 'react';
import './App.css';
import Front from './Components/Front/Front'
import Stats  from './Components/Stats/Stats';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Front/>
      <Stats/>
      <About/>
    </div>
  );
}

export default App;
