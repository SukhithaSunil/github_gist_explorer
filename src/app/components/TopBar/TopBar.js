import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {GitHubExplorerIcon} from './TopBar.style';

const TopBar =()=> {
  return (
    <div>
      <CssBaseline />
      <AppBar position='sticky'>
        <Toolbar>
          <GitHubExplorerIcon />
          <Typography variant='h6' color='inherit' noWrap>
            GitHub Gist Explorer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
