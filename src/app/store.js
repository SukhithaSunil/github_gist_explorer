import { configureStore } from '@reduxjs/toolkit';
import searchGistsDetails_reducer from '../../src/app/redux/reducers/searchGistsDetails_reducer';
import singleGist_reducer from '../../src/app/redux/reducers/singleGist_reducer'

export default configureStore({
  reducer: {
    gistsDetails: searchGistsDetails_reducer,
    singleGist: singleGist_reducer,
  },
})
