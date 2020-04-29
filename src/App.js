import React from 'react';
import Header from './components/layout/header'
import Canvas from './components/layout/canvas'
import Customiser from './components/customiser/customiser'

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
