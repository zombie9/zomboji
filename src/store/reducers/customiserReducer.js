import initState from '../initState'

const customiserReducer = (state = initState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'SET_LAYER':
    return Object.assign({}, state, {
      layers: state.layers.map((layer, index) => {
        if (index === action.payload.index) {
          return Object.assign({}, layer, {
            selected: action.payload.selected
          })
        }
        console.log(state)
        return layer
      })
    })

    default:
      return state
  }
}

export default customiserReducer
