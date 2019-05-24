/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants'

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // Set the requesting flag and append a message to be shown
      case LOGIN_REQUESTING:
        draft.requesting = true;
        draft.successful = false;
        draft.messages = [{ body: 'Logging in...', time: new Date() }];
        draft.errors = [];
        break;
      // Successful?  Reset the login state.
      case LOGIN_SUCCESS:
        draft.requesting = false;
        draft.successful = true;
        draft.messages = [];
        draft.errors = [];
        break;
      // Append the error returned from our api
      // set the success and requesting flags to false
      case LOGIN_ERROR:
        draft.requesting = false;
        draft.successful = false;
        draft.messages = [];
        draft.errors = action.error;
        break;
    }
  });

export default loginReducer;
