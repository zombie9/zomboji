import React from 'react';
import zombojiBase from '../../images/zomboji-1.png'

function Canvas() {
  return (
    <div className="canvas">
      <img
        className="d-block"
        style={{height: "600px"}}
        src={zombojiBase}
        alt="zomboji base"
      ></img>
    </div>
  );
}

export default Canvas;
