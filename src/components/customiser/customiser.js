import React from 'react';
import { Slider } from '@material-ui/core'

function Customiser() {
  return (
    <div className="d-flex align-items-center">
      <div>
        <h5>head</h5>
        <Slider />
        <h5>eyes</h5>
        <Slider />
        <h5>nose</h5>
        <Slider />
        <h5>beard</h5>
        <Slider />
      </div>
    </div>
  );
}

export default Customiser;
