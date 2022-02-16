import api from '../api'
import {
  GET_EXPERIENCES,
  GET_EXPERIENCES_SUCCESS,
  GET_EXPERIENCES_FAILURE,
} from '../const'

export const getAllExperiences = () => {
  return async (dispatch) => {
    dispatch({ type: GET_EXPERIENCES })
    return api('GET', '/api/experience').then(
      (experience) => {
        dispatch({ type: GET_EXPERIENCES_SUCCESS, payload: experience })
        return experience
      },
      (error) => {
        dispatch({ type: GET_EXPERIENCES_FAILURE, payload: error })
      },
    )
  }
}
