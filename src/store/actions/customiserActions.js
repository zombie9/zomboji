export const setLayer = (newSelected) => {
  return {
    type: 'SET_LAYER',
    payload: newSelected
  }
}

export const setRandom = () => {
  return {
    type: 'SET_RANDOM',
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}
