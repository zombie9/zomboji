import React from 'react';
import { Slider } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setLayer } from '../../store/actions/customiserActions'


function CustomiserItem({layer}) {
  const dispatch = useDispatch()
  let value
  const handleChange = (event, newValue) => {
    if (value !== newValue) {
      dispatch(setLayer({
        selected: newValue,
        index: layer.key-1}))
    }
  }

  return (
    <div>
      <h5>{layer.name}</h5>
      <Slider
        value={value}
        step={1}
        marks
        min={0}
        max={layer.options.length}
        onChange={handleChange}
      />
    </div>
  );
}

export default CustomiserItem;
