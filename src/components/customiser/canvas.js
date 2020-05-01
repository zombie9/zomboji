import React from 'react';
import { useSelector } from 'react-redux'
import zombojiBase from '../../images/zomboji-1.png'
import Header from './header'
import CanvasLayer from './canvas-layer'

function Canvas() {
  const layers = useSelector(state => state.customiser.layers)
  return (
    <div className="canvas">
      <Header />
      <img
        className="d-block zomboji-base"
        src={zombojiBase}
        alt="zomboji base">
      </img>
      { layers && layers.map(layer => {
        if (layer.selected) {
          return <CanvasLayer layer={layer} key={layer.key}/>
        } else {
          return null
        }
      })}
    </div>
  )
}

export default Canvas;
