import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Gist from 'react-gist';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ReactEmbedGist from 'react-embed-gist';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import assets from '../../assets';

import { fetchGistById } from '../../redux/actions/singleGist_actions';

const useStyles = makeStyles({
  hc: {
    height: '23%!important',
    fontSize:"45px!important"
  },
  root: {
    margin: '35px!important',
  },
})
export const GistDetails = ({ match, fetchGistById,gist }) => {
  const classes = useStyles()

  
  const [gistId, setGistId] = useState(null);
  const [forks, setForks] = useState(gist?.forks.slice(0,3));


  useEffect(() => {
    console.log(match.params);
    setGistId(match.params.id);
    fetchGistById(match.params.id);

  }, [])

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item item xs={12} md={3} lg={4} align='center'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Chip
            className={classes.type}
            size='small'
            avatar={<Avatar >F</Avatar>}
            label={`Fork `}
            color='primary'
          />
          {gist?.forks?.length > 0 &&
            gist.forks.slice(0, 3).map((fork) => (
              <React.Fragment>
                <Avatar alt={fork.user.login} src={fork.user.avatar_url} />
                <a href={`https://gist.github.com/${fork.id}`} target='_blank'>
                  <Typography color='textSecondary'>
                    {fork.user.login}
                  </Typography>
                </a>
              </React.Fragment>
            ))}
          {gist?.forks?.length == 0 && (
            <Typography color='textSecondary'>{'No forks'}</Typography>
          )}
        </div>
      </Grid>
      <Grid item item xs={10} md={11} lg={10}>
        {gistId && <Gist id={gistId} />}
      </Grid>
    </Grid>
  )
}

const mapStateToProps = (state) => ({ gist: state.singleGist.gist })

const mapDispatchToProps = { fetchGistById }

export default connect(mapStateToProps, mapDispatchToProps)(GistDetails)
