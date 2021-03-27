import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'
import { connect } from 'react-redux'
import GistCard from '../GistCard/GistCard'
import { GistResultsDiv } from './GistResults.styled'

export const GistResults = ({ gistList, error, loading, userName }) => {
  return (
    <GistResultsDiv>
      {gistList?.length == 0 && (
        <h2>{`We couldn’t find any gists for ${userName} `}</h2>
      )}

      {error && <h2>{error} </h2>}

      {loading &&
        [1, 2, 3, 4, 5, 6].map((index) => (
          <Grid container spacing={3} key={index}>
            {loading &&
              Array.from(new Array(3)).map((index) => (
                <Box key={index} width={210} marginRight={0.5} my={5}>
                  <Skeleton variant='rect' width={210} height={118} />
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width='60%' />
                  </Box>
                </Box>
              ))}
          </Grid>
        ))}

      {gistList?.length > 0 && (
        <Grid container spacing={1}>
          <GistCard />
        </Grid>
      )}
    </GistResultsDiv>
  )
}

const mapStateToProps = (state) => ({
  gistList: state.gistsDetails.gists,
  error: state.gistsDetails.error,
  loading: state.gistsDetails.loading,
  userName: state.gistsDetails.userName,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GistResults)
