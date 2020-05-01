import initState from '../initState'

const customiserReducer = (state = initState, action) => {

  switch (action.type) {

    case 'SET_LAYER':
      return {...state,
        layers: state.layers.map((layer, index) => {
          if (index === action.payload.index) {
            return {...layer,
              selected: action.payload.selected
            }
          }
          return layer
        })
      }

    case 'SET_RANDOM':
      return {...state,
        layers: state.layers.map(layer => {
          const range = layer.options.length + 1
          return {...layer,
            selected: Math.floor(Math.random() * range)
          }
        })
      }

    case 'RESET':
      return initState

    default:
      return state
  }

}

export default customiserReducer
