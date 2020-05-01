import React from 'react';

const CanvasLayer = ({layer}) => {
  console.log(layer.selected)
  const option = layer.selected - 1
  const imgSrc = require(`../../images/${layer.options[option].file}`)
  return (
    <img
      className="layer"
      style={{zIndex:`${layer.options[option].zindex}`}}
      src={imgSrc}
      alt={layer.options[option].file}>
    </img>
  )
}

export default CanvasLayer;
