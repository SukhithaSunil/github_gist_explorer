import React from 'react';
import Typography from '@material-ui/core/Typography';
import DiscoverGist from '../../components/DiscoverGist/DiscoverGist';
import { DashboardContainer, GistDiv } from './DashBoard.styled'

export const DashBoard = (props) => {
  return (
    <div>
      <DashboardContainer>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Discover code, notes, and snippets.
        </Typography>
        <GistDiv>
          <DiscoverGist />
        </GistDiv>
      </DashboardContainer>
    </div>
  )
};


export default DashBoard;
