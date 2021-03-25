import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'material-ui-search-bar';
import { fetchGists } from '../../redux/actions/searchGistsDetails_actions';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

  heroContent: {
    // backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(5, 0, 6),
  },
}))
export const SearchDist = (props) => {


  const [userName, setUserName] = useState('');
  const searchGists = () => {
    console.log(userName);
    props.fetchGists(userName);
  };
  return (
   
      <SearchBar
        placeholder={'Search by user id'}
        value={userName}
        onChange={(name) => setUserName(name)}
        onRequestSearch={searchGists}
        //   onCancelSearch={setUserName('')}
      />
    
  )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { fetchGists };

export default connect(mapStateToProps, mapDispatchToProps)(SearchDist);
