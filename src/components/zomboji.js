import React from 'react';
import Canvas from './customiser/canvas'
import Customiser from './customiser/customiser'
import Header from './customiser/header'

const Zomboji = () => {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-md-3"><Header /></div>
        <div className="col-md-6"><Canvas /></div>
        <div className="col-md-3"><Customiser /></div>
      </div>
    </div>
  )
}

export default Zomboji