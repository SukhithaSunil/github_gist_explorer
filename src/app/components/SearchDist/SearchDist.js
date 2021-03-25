import React, { useState } from 'react'
import { connect } from 'react-redux'
import SearchBar from 'material-ui-search-bar'
import {
  fetchGists,
  clearGists,
} from '../../redux/actions/searchGistsDetails_actions'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(5, 0, 6),
  },
}))
export const SearchDist = (props) => {
  const [userName, setUserName] = useState("");
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
      value={userName || props.userName}
      onChange={(name) => setUserName(name)}
      onRequestSearch={searchGists}
      onCancelSearch={clearGists}
    />
  )
}

const mapStateToProps = (state) => ({ userName: state.gistsDetails.userName })

const mapDispatchToProps = { fetchGists, clearGists }

export default connect(mapStateToProps, mapDispatchToProps)(SearchDist)
