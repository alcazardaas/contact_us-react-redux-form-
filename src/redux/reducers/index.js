import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import contactUsReducer from './contactus'
import createContactUsReducer from './createContactUs'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  contactus: contactUsReducer,
  createContactUs : createContactUsReducer,
})