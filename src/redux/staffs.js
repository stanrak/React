import * as ActionTypes from './ActionTypes';

// fetch staffs from API
export const Staffs = (state = {
  isLoading: true,
  errMess: null,
  staffs: []
}, action) => {
  switch (action.type) {
    // fetch staff data
    case ActionTypes.STAFFS_FETCH_LOADING:
      return { ...state, isLoading: true, errMess: null, staffs:[] };
    case ActionTypes.STAFFS_FETCH_SUCCESS:
      return { ...state, isLoading: false, errMess: null, staffs: action.payload };
    case ActionTypes.STAFFS_FETCH_ERROR:
      return { ...state, isLoading: false, errMess: action.payload };
    
    // change staffs to make a new staff list
    case ActionTypes.STAFFS_NEW_LIST:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        staffs: state.staffs.filter((s) => {
          return s.name.toLowerCase().indexOf(action.payload.value.toLowerCase()) !== -1
        })
      };
      
    // default
    default:
      return state;
  }
}