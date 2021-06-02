import React from 'react';
import Canvas from './components/customiser/canvas'
import Customiser from './components/customiser/customiser'
import Header from './components/customiser/header'

function App() {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-3"><Header /></div>
        <div className="col-md-6"><Canvas /></div>
        <div className="col-md-3"><Customiser /></div>
      </div>

    </div>
  );
}

export default App;
