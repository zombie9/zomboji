import React from 'react';
import Canvas from './components/customiser/canvas'
import Customiser from './components/customiser/customiser'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Canvas />
        <Customiser />
      </div>

    </div>
  );
}

export default App;
