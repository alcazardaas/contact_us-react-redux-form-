import * as a from '../actions/types'

const INITIAL_STATE = {
  contactus: [],
  isLoaded: false,
  error: ''
}

export default function contactUsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CONTACTUS_GETALL_REQUEST:
      return {
        ...state
      }
    case a.CONTACTUS_GETALL_SUCCESS:
      return {
        ...state,
        contactus: action.payload,
        isLoaded: true
      }
    case a.CONTACTUS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      }
    default:
      return state
  }
}