/*
 * action types
 */
export const GOOGLE_ID = 'GOOGLE_ID'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE'
export const SET_GOOGLE_ID = 'SET_GOOGLE_ID';

/*
 * action creators
 */
/*export function get_id() {
  return { type: GOOGLE_ID, GOOGLE_ID
}*/

export const set_id = (id) => ({
  type: SET_GOOGLE_ID,
  id: id
});

export const googleLoginSuccess = (payload) => {
  console.log(payload);
  return { type: GOOGLE_LOGIN_SUCCESS,
           id: payload.googleId
  }
};

export const googleLoginFailure = (payload) => ({
  type: GOOGLE_LOGIN_FAILURE,
  payload: payload
});
