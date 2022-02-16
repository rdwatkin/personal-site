const spread = (more) => (state, payload) => ({ ...state, ...payload, ...more })

const reducer = {
  spread,
}

export default reducer
