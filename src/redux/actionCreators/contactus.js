import * as a from './../actions/types'

const API = 'http://localhost:3000/contactus'

export default function getAllContactUs() {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CONTACTUS_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API)
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.CONTACTUS_GETALL_SUCCESS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CONTACTUS_GETALL_FAILURE,
        error: err
      })
    }
  }
}