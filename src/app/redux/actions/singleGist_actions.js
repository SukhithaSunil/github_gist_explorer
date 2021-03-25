export const FETCH_GIST_REQUEST = 'FETCH_GIST_REQUEST'
export const FETCH_GIST_SUCCESS = 'FETCH_GIST_SUCCESS'
export const FETCH_GIST_FAILURE = 'FETCH_GIST_FAILURE'
export const SELECT_GISTS = 'SELECT_GISTS'
export const UNSELECT_GISTS = 'UNSELECT_GISTS'

export const fetchGistRequest = () => ({
  type: FETCH_GIST_REQUEST,
})

export const fetchGistSuccess = (gist) => ({
  type: FETCH_GIST_SUCCESS,
  gist,
})

export const fetchGistFailure = (error) => ({
  type: FETCH_GIST_FAILURE,
  error,
})
async function getGistDetails(gistId) {
  var url = `https://api.github.com/gists/${gistId}`;
  var gistDetails;
  await fetch(url)
    .then((response) => {
      console.log(response.status) // Will show you the status
      if (!response.ok) {
        if (response.status == 404)
          throw new Error(`We couldn’t find gist`);
        else throw new Error(response);
      }
      return response.json();
    })
    .then((data) => {
      gistDetails = JSON.parse(JSON.stringify(data));
      console.log(gistDetails);
    })

  return gistDetails;
}
export const fetchGistById = (gistId) => async (dispatch) => {
  dispatch(fetchGistRequest())
  try {
    const gistDetails = await getGistDetails(gistId)
    dispatch(fetchGistSuccess(gistDetails))
  } catch (err) {
    console.log(err)
    dispatch(fetchGistFailure(err.message))
  }
}
