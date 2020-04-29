import React, { Component } from 'react';
import Layers from './layers'
import CustomiserItem from './customiser-item'
import { connect } from 'react-redux'

class Customiser extends Component {
  render(){
    return (
      <div className="d-flex align-items-center">
        <div>
          { Layers && Layers.map(layer => {
            return (
              <CustomiserItem layer={layer} key={layer.key} />
            )
          })}
        </div>
      </div>
    )
  }

}

export default connect()(Customiser)
