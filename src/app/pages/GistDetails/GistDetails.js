import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Gist from 'react-gist'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'
import ReactEmbedGist from 'react-embed-gist'
import { makeStyles } from '@material-ui/core/styles'
import { SvgIcon } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Fork from '../../components/UI/Fork/Fork'

import { fetchGistById } from '../../redux/actions/singleGist_actions'

const useStyles = makeStyles({
  hc: {
    height: '23%!important',
    fontSize: '45px!important',
  },
  root: {
    margin: '35px!important',
  },
})
export const GistDetails = ({ match, fetchGistById, gist }) => {
  const classes = useStyles()

  const [gistId, setGistId] = useState(null)
  const [forks, setForks] = useState(gist?.forks.slice(0, 3))

  useEffect(() => {
    console.log(match.params)
    setGistId(`${match.params.userName}/${match.params.id}`)
    fetchGistById(match.params.id)
  }, [])

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item item xs={10} sm={10} md={6} lg={6} align='center'>
        <Fork forks={gist?.forks.slice(0, 3)} />
      </Grid>
      <Grid item item xs={10} md={11} lg={10}>
        {gistId && <ReactEmbedGist gist={gistId} />}
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({ gist: state.singleGist.gist })

const mapDispatchToProps = { fetchGistById }

export default connect(mapStateToProps, mapDispatchToProps)(GistDetails)
