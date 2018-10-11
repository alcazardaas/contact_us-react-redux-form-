import * as a from '../actions/types'

const INITIAL_STATE = {
  contactus: [],
  saved: false,
  error: ''
}

export default function createContactUsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CREATE_DATA_REQUEST:
      return {
        ...state,
        isLoaded: false
      }
    case a.CREATE_DATA_SUCCESS:
      return {
        ...state,
        contactus: action.payload,
        saved: true
      }
    case a.CREATE_DATA_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}