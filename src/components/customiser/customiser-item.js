import React from 'react';
import { Slider } from '@material-ui/core'

function CustomiserItem({layer}) {
  return (
      <div>
        <h5>{layer.name}</h5>
        <Slider
          defaultValue={0}
          aria-labelledby=""
          step={1}
          marks
          min={0}
          max={layer.options.length}
        />
      </div>
  );
}

export default CustomiserItem;
