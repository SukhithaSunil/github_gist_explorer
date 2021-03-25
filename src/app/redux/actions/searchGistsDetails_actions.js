export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST';
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS';
export const FETCH_GISTS_FAILURE = 'FETCH_GISTS_FAILURE';
export const SELECT_GISTS = 'SELECT_GISTS';
export const UNSELECT_GISTS = 'UNSELECT_GISTS';

export const selectGists = (gist) => ({
  type: SELECT_GISTS,
  gist,
});

export const unSelectGists = () => ({
  type: UNSELECT_GISTS,
});

export const fetchGistsRequest = () => ({
  type: FETCH_GISTS_REQUEST,
});

export const fetchGistsSuccess = (gists) => ({
  type: FETCH_GISTS_SUCCESS,
  gists,
});

export const fetchGistsFailure = (error) => ({
  type: FETCH_GISTS_FAILURE,
  error,
});
async function getGistsDetails(userName) {
  var url = `https://api.github.com/users/${userName}/gists`;
  var gistDetails;
  await fetch(url)
    .then((response) => {
      console.log(response.status); // Will show you the status
      if (!response.ok) {
        if (response.status == 404)
          throw new Error(`We couldn’t find user ${userName}`);
        else throw new Error(response);
      }
      return response.json();
    })
    .then((data) => {
      gistDetails = JSON.parse(JSON.stringify(data));
      console.log(gistDetails);
      
    });

  return gistDetails;
}
export const fetchGists = (userName) => async (dispatch) => {
  dispatch(fetchGistsRequest());
  try {
    const gistsDetails = await getGistsDetails(userName);
    dispatch(fetchGistsSuccess(gistsDetails));
  } catch (err) {
    console.log(err);
    dispatch(fetchGistsFailure(err.message));
  }
};
