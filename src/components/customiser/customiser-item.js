import React from 'react';
import { Slider } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { setLayer } from '../../store/actions/customiserActions'

const CustomiserItem = ({layer}) => {
  const sliderValue = useSelector(state => state.customiser.layers[layer.key-1].selected)
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
        value={sliderValue}
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
