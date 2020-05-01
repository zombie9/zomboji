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
    case 'SET_RANDOM':
      return Object.assign({}, state, {
        layers: state.layers.map((layer, index) => {
          const range = layer.options.length + 1
          return Object.assign({}, layer, {
            selected: Math.floor(Math.random() * range)
          })
        })
      })
    case 'RESET':
      return initState
    default:
      return state
  }

}

export default customiserReducer
