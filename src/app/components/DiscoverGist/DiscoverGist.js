import Grid from '@material-ui/core/Grid'
import React from 'react'
import GistResults from '../../components/GistResults/GistResults'
import SearchDist from '../../components/SearchDist/SearchDist'
import {SearchDistGrid} from './DiscoverGist.styled'


export const DiscoverGist = (props) => {

  return (
    <Grid container justify='center' alignItems='center'>
      <SearchDistGrid item xs={10} sm={10} md={8} lg={8}>
        <SearchDist />
      </SearchDistGrid>
      <Grid item item xs={12} sm={12} md={12} lg={12}>
        <GistResults />
      </Grid>
    </Grid>
  )
}



export default DiscoverGist
