import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import DiscoverGist from '../../components/DiscoverGist/DiscoverGist';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroButtons: {
    margin: theme.spacing(5,5,5,5),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
}))

export const DashBoard = (props) => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar  position='sticky'>
        <Toolbar>
          <GitHubIcon className={classes.icon} />
          <Typography variant='h6' color='inherit' noWrap>
            GitHub Gist Explorer
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.heroContent}>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Discover code, notes, and snippets.
        </Typography>
        <div className={classes.heroButtons}>
          <DiscoverGist />
        </div>
      </Container>
    </div>
  )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
