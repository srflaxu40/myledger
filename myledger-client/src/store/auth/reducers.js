
import {
  SET_GOOGLE_ID,
  SET_JWT,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_SUCCESS
} from './actions'


const id = (state, action) => {
  switch (action.type) {
    case SET_GOOGLE_ID:
      return { ...state, id: action.id };
    case GOOGLE_LOGIN_SUCCESS:
      return { ...state, id: action.id };
    case GOOGLE_LOGIN_FAILURE:
      return { ...state, id: action.id };
    case SET_JWT:
      return { ...state, jwt: action.jwt };
    default:
      return state;
  }
}

export default id
