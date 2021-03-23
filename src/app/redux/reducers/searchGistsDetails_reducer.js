import * as actions from '../actions/searchGistsDetails_actions';

const initialState = {
  gists: null,
  loading: false,
  error: null,
  selectedGist: {},
};

export default function searchGistsDetails_reducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case actions.FETCH_GISTS_REQUEST:
      return { ...state, loading: true };
    case actions.FETCH_GISTS_SUCCESS:
      return {
        ...state,
        gists: [].concat(action.gists),
        loading: false,
        error: null,
      };
    case actions.FETCH_GISTS_FAILURE:
      return { ...state, error: action.error, loading: false };
    case actions.SELECT_GISTS:
      return { ...state, selectedGist: action.gist };
    case actions.UNSELECT_GISTS:
      return { ...state, selectedGist: {} };

    default:
      return state;
  }
}
