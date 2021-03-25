export const FETCH_GISTS_REQUEST = 'FETCH_GISTS_REQUEST'
export const FETCH_GISTS_SUCCESS = 'FETCH_GISTS_SUCCESS'
export const FETCH_GISTS_FAILURE = 'FETCH_GISTS_FAILURE'
export const CLEAR_GISTS = 'CLEAR_GISTS'

export const clearGists = () => ({
  type: CLEAR_GISTS,
  
})


export const fetchGistsRequest = () => ({
  type: FETCH_GISTS_REQUEST,
})

export const fetchGistsSuccess = (userName, gists) => ({
  type: FETCH_GISTS_SUCCESS,
  userName,
  gists,
})

export const fetchGistsFailure = (userName, error) => ({
  type: FETCH_GISTS_FAILURE,
  userName,
  error,
})
async function getGistsDetails(userName) {
  var url = `https://api.github.com/users/${userName}/gists`
  var gistDetails
  await fetch(url)
    .then((response) => {
      if (!response.ok) {
        if (response.status == 404)
          throw new Error(`We couldn’t find user ${userName}`)
        else if (response.status == 403)
          throw new Error(`Forbidden Request. API rate limit may exceeded`)
        else throw new Error(response)
      }
      return response.json()
    })
    .then((data) => {
      gistDetails = JSON.parse(JSON.stringify(data))
    })

  return gistDetails
}
export const fetchGists = (userName) => async (dispatch) => {
  dispatch(fetchGistsRequest())
  try {
    const gistsDetails = await getGistsDetails(userName)
    dispatch(fetchGistsSuccess(userName, gistsDetails))
  } catch (err) {
    console.log(err)
    dispatch(fetchGistsFailure(userName, err.message))
  }
}
