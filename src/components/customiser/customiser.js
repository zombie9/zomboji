import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import CustomiserItem from './customiser-item'
import { setRandom, reset } from '../../store/actions/customiserActions'

const Customiser = () => {
  const layers = useSelector(state => state.customiser.layers)
  const dispatch = useDispatch()
  return (
    <div className="h-100 d-flex align-items-center">
      <div className="customiser row">
        { layers && layers.map(layer => {
          return (
            <CustomiserItem layer={layer} key={layer.key} />
          )
        })}
        <div className="col-6 col-md-12">
          <button onClick={() => dispatch(setRandom())}>randomize</button>
        </div>
        <div className="col-6 col-md-12">
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>       
      </div>
    </div>
  );
}

export default Customiser;
