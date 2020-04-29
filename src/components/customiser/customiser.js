import React from 'react';
import { useSelector } from 'react-redux'
import CustomiserItem from './customiser-item'

function Customiser() {
  const layers = useSelector(state => state.customiser.layers)
  return (
    <div className="d-flex align-items-center">
      <div>
        { layers && layers.map(layer => {
          return (
            <CustomiserItem layer={layer} key={layer.key} />
          )
        })}
      </div>
    </div>
  );
}

export default Customiser;
