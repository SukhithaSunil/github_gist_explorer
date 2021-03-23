import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'material-ui-search-bar';
import { fetchGists } from '../../redux/actions/searchGistsDetails_actions';
export const SearchDist = (props) => {
  const [userName, setUserName] = useState('');
  const searchGists = () => {
    console.log(userName);
    props.fetchGists(userName);
  };
  return (
    <SearchBar
      placeholder={'search'}
      value={userName}
      onChange={(name) => setUserName(name)}
      onRequestSearch={searchGists}
      //   onCancelSearch={setUserName('')}
    />
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { fetchGists };

export default connect(mapStateToProps, mapDispatchToProps)(SearchDist);
