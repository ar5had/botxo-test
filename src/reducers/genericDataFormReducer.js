import { LOAD_INITIAL_GENERIC_DATA, ADD_GD_ENTRY, REMOVE_GD_ENTRY } from '../constants/actionTypes';
import { fromJS } from 'immutable';
import initialState from './initialState';

const genericDataFormReducer = (state = initialState.genericDataForm, action) => {
  switch (action.type) {
    case LOAD_INITIAL_GENERIC_DATA:
      return state.set('form', fromJS(action.payload));
    case ADD_GD_ENTRY:
      return state;
    case REMOVE_GD_ENTRY:
      return state;
    default:
      return state;
  }
};


export default genericDataFormReducer;
