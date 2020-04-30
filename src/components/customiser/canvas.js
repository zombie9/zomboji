import React from 'react';
import { useSelector } from 'react-redux'
import zombojiBase from '../../images/zomboji-1.png'
import Header from '../layout/header'

function Canvas() {
  const layers = useSelector(state => state.customiser.layers)
  console.log(layers)
  return (
    <div className="canvas">
      <Header />
      <img
        className="d-block"
        style={{height: "800px"}}
        src={zombojiBase}
        alt="zomboji base">
      </img>
      { layers && layers.map(layer => {
        if (layer.selected) {
          const option = layer.selected - 1
          const imgSrc = require(`../../images/${layer.options[option].file}`)
          return (
            <img
              key={layer.key}
              className="layer"
              style={{zIndex:layer.index}}
              src={imgSrc}
              alt={layer.options[option].file}>
            </img>
          )
        } else {
          return ''
        }
      })}
    </div>
  );
}

export default Canvas;
