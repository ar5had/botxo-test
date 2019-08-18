import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import genericDataFormReducer from './genericDataFormReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  genericDataForm: genericDataFormReducer
});

export default rootReducer;
