import Grid from '@material-ui/core/Grid'
import React, { useEffect, useState } from 'react'
import ReactEmbedGist from 'react-embed-gist'
import { connect } from 'react-redux'
import Fork from '../../components/Fork/Fork'
import { fetchGistById } from '../../redux/actions/singleGist_actions'

export const GistDetails = ({ match, fetchGistById, gist, error, loading }) => {

  const [gistId, setGistId] = useState(null)

  useEffect(() => {
    setGistId(`${match.params.userName}/${match.params.id}`)
    fetchGistById(match.params.id)
  }, [])

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item item xs={10} sm={10} md={6} lg={6} align='center'>
        <Fork forks={gist?.forks.slice(0, 3)} loading={loading} error={error} />
      </Grid>
      <Grid item item xs={10} md={11} lg={10}>
        {gistId && <ReactEmbedGist gist={gistId} />}
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  gist: state.singleGist.gist,
  error: state.singleGist.error,
  loading: state.singleGist.loading,
})

const mapDispatchToProps = { fetchGistById }

export default connect(mapStateToProps, mapDispatchToProps)(GistDetails)
