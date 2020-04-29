import React from 'react';
import { Slider } from '@material-ui/core'
import Layers from './layers'
import CustomiserItem from './customiser-item'

function Customiser() {
  return (
    <div className="d-flex align-items-center">
      <div>
        { Layers && Layers.map(layer => {
          return (
            <CustomiserItem layer={layer} />
          )
        })}
      </div>
    </div>
  );
}

export default Customiser;
