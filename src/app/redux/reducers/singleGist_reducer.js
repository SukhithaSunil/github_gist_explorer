import * as actions from '../actions/singleGist_actions';

const initialState = {
  gist: null,
  loading: false,
  error: null,
}

export default function singleGist_reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actions.FETCH_GIST_REQUEST:
      return { ...state, gist: null, loading: true, error: null }
    case actions.FETCH_GIST_SUCCESS:
      return {
        ...state,
        gist: action.gist,
        loading: false,
        error: null,
      }
    case actions.FETCH_GIST_FAILURE:
      return { ...state, gist: null, error: action.error, loading: false }
 

    default:
      return state
  }
}
