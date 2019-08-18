import { LOAD_INITIAL_GENERIC_DATA, ADD_GD_ENTRY, REMOVE_GD_ENTRY } from '../constants/actionTypes';

export function loadInitialGenericData(data) {
  return (dispatch) => {
    dispatch(
      {
        type: LOAD_INITIAL_GENERIC_DATA,
        payload: data
      }
    );
  };
}

export function addGenericDataEntry(entry) {
  return (dispatch) => {
    dispatch(
      {
        type: ADD_GD_ENTRY,
        payload: entry
      }
    );
  };
}

export function removeGenericDataEntry(name) {
  return (dispatch) => {
    dispatch(
      {
        type: ADD_GD_ENTRY,
        payload: name
      }
    );
  };
}
