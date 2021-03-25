import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import Grid from '@material-ui/core/Grid';
import GistCard from '../GistCard/GistCard';
import { makeStyles } from '@material-ui/core/styles'

export const GistResults = ({ gistList, error, loading }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }))
  return (
    <div>
      {gistList?.length == 0 && <h2>We couldn’t find any gists for user </h2>}
      {error && <h2>{error} </h2>}
      {loading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Skeleton animation='wave' height={10} width={210} />
              <Skeleton
                animation='wave'
                variant='circle'
                width={40}
                height={40}
              />
              <Skeleton animation='wave' height={10} width={210} />
              <Skeleton
                animation='wave'
                variant='rect'
                width={210}
                height={118}
              />
            </Grid>
          </Grid>
        ))}
      {gistList?.length > 0 && (
        <Grid container spacing={3}>
          <GistCard />
        </Grid>
      )}
    </div>
  )
};

const mapStateToProps = (state) => ({
  gistList: state.gistsDetails.gists,
  error: state.gistsDetails.error,
  loading: state.gistsDetails.loading,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GistResults);
