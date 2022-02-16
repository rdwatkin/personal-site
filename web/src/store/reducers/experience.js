import { createReducer } from '../createReducer'
import reducer from './reducers'
import {
  GET_EXPERIENCES,
  GET_EXPERIENCES_SUCCESS,
  GET_EXPERIENCES_FAILURE,
} from '../const'

export const initialState = {
  experiences: [],
  loading: true,
  error: null,
}

export default createReducer(initialState, {
  [GET_EXPERIENCES]: reducer.spread({ error: null }),
  [GET_EXPERIENCES_SUCCESS]: (state, payload) => {
    return { ...state, experiences: payload, loading: false }
  },
  [GET_EXPERIENCES_FAILURE]: (state, payload) => {
    return { ...state, error: payload, loading: false }
  },
})
