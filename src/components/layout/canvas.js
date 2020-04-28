import React from 'react';
import zombojiBase from '../../images/zomboji-1.png'

function Canvas() {
  return (
    <div className="canvas">
      <img className="d-block" style={{height: "600px"}} src={zombojiBase}></img>
    </div>
  );
}

export default Canvas;
