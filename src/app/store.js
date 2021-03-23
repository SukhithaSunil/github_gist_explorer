import { configureStore } from '@reduxjs/toolkit';
import searchGistsDetails_reducer from '../../src/app/redux/reducers/searchGistsDetails_reducer';
export default configureStore({
  reducer: {
    gistsDetails: searchGistsDetails_reducer,
  },
});
