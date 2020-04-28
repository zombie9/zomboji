import React from 'react';
import zombojiBase from './images/zomboji-1.png'
import Header from './components/layout/header'
import Canvas from './components/layout/canvas'
import Customiser from './components/layout/customiser'

function App() {
  return (
    <div className="container">
      <Header />
      <div style={{display: "flex", justifyContent: "center", height: "600px"}}>
        <Canvas />
        <Customiser />
      </div>

    </div>
  );
}

export default App;
