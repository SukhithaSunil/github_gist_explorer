import React from 'react'
import { connect } from 'react-redux'
import SearchDist from '../../components/SearchDist/SearchDist'
import GistResults from '../../components/GistResults/GistResults'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) => ({
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 0, 5),
  },
}))
export const DiscoverGist = (props) => {
  const classes = useStyles()

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item className={classes.heroContent} item xs={10} sm={10} md={8} lg={8}>
        <SearchDist />
      </Grid>
      <Grid item item xs={12} sm={12} md={12} lg={12}>
        <GistResults style={{ height: '100%!important' }} />
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverGist)
