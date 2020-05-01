import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CustomiserItem from './customiser-item'
import { setRandom, reset } from '../../store/actions/customiserActions'

const Customiser = () => {
  const layers = useSelector(state => state.customiser.layers)
  const dispatch = useDispatch()
  return (
    <div className="d-flex align-items-center">
      <div className="customiser">
        { layers && layers.map(layer => {
          return (
            <CustomiserItem layer={layer} key={layer.key} />
          )
        })}
        <button onClick={() => dispatch(setRandom())}>randomize</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  );
}

export default Customiser;
