import * as actions from '../actions/searchGistsDetails_actions';

const initialState = {
  userName: '',
  gists: null,
  loading: false,
  error: null,
};

export default function searchGistsDetails_reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actions.FETCH_GISTS_REQUEST:
      return {
        ...state,
        userName: '',
        gists: null,
        loading: true,
        error: null,
      }
    case actions.FETCH_GISTS_SUCCESS:
      return {
        ...state,
        userName: action.userName,
        gists: [].concat(action.gists),
        loading: false,
        error: null,
      }
    case actions.FETCH_GISTS_FAILURE:
      return {
        ...state,
        userName: action.userName,
        gists: null,
        error: action.error,
        loading: false,
      }

    case actions.CLEAR_GISTS:
       return initialState;

    default:
      return state;
  }
}
