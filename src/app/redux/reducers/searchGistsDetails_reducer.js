import * as actions from '../actions/searchGistsDetails_actions';

const initialState = {
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
      return { ...state, gists: [], loading: true, error: null }
    case actions.FETCH_GISTS_SUCCESS:
      return {
        ...state,
        gists: [].concat(action.gists),
        loading: false,
        error: null,
      };
    case actions.FETCH_GISTS_FAILURE:
      return { ...state,gists:null, error: action.error, loading: false };

    default:
      return state;
  }
}
