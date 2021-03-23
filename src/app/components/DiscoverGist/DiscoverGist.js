import React from 'react';
import { connect } from 'react-redux';
import SearchDist from '../../components/SearchDist/SearchDist';
import GistResults from '../../components/GistResults/GistResults';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// We couldn’t find any gists matching 'sukhitha'
export const DiscoverGist = (props) => {
  return (
    <div>
      <SearchDist />
      <GistResults style={{ height: '100%!important' }} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverGist);
