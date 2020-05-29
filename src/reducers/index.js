// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import PeopleReducer from './people_reducer';
import WardsReducer from './wards_reducer';

const rootReducer = combineReducers({
  people: PeopleReducer,
  wards: WardsReducer,
});

export default rootReducer;
