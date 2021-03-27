import SearchBar from 'material-ui-search-bar'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  clearGists, fetchGists
} from '../../redux/actions/searchGistsDetails_actions'

export const SearchDist = (props) => {
  const [userName, setUserName] = useState(props.userName);
  const searchGists = () => {
    if (userName !== '') props.fetchGists(userName)
  }
  const clearGists = () =>{
     setUserName('');
    props.clearGists();
  }
  return (
    <SearchBar
      placeholder={'Search by user id'}
      value={userName }
      onChange={(name) => setUserName(name)}
      onRequestSearch={searchGists}
      onCancelSearch={clearGists}
    />
  )
}

const mapStateToProps = (state) => ({ userName: state.gistsDetails.userName })

const mapDispatchToProps = { fetchGists, clearGists }

export default connect(mapStateToProps, mapDispatchToProps)(SearchDist)
