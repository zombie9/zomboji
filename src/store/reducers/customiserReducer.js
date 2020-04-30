import initState from '../initState'

const customiserReducer = (state = initState, action) => {

  switch (action.type) {
    case 'SET_LAYER':
    return Object.assign({}, state, {
      layers: state.layers.map((layer, index) => {
        if (index === action.payload.index) {
          return Object.assign({}, layer, {
            selected: action.payload.selected
          })
        }
        return layer
      })
    })

    default:
      return state
  }

}

export default customiserReducer
