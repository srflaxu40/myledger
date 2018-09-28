
import {
  SET_GOOGLE_ID,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_SUCCESS
} from './actions'


const id = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_GOOGLE_ID:
      console.log(state);
      console.log(action);
      return { ...state, id: action.id };
    case GOOGLE_LOGIN_SUCCESS:
      console.log(action);
      return { ...state, id: action.id };
    case GOOGLE_LOGIN_FAILURE:
      console.log(state);
      console.log(action);
      return { ...state, id: action.id };
    default:
      return state;
  }
}

export default id
