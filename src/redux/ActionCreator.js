import * as ActionTypes from './ActionTypes';

// fetch Staffs

export const staffsFetchLoading = () => ({
  type: ActionTypes.STAFFS_FETCH_LOADING
});

export const staffsFetchSuccess = (staffs) => ({
  type: ActionTypes.STAFFS_FETCH_SUCCESS,
  payload: staffs
});

export const staffsFetchError = (err) => ({
  type: ActionTypes.STAFFS_FETCH_ERROR,
  payload: err
});

// fetch Departments

export const departmentsFetchLoading = () => ({
  type: ActionTypes.DEPARTMENTS_FETCH_LOADING
});

export const departmentsFetchSuccess = (departments) => ({
  type: ActionTypes.DEPARTMENTS_FETCH_SUCCESS,
  payload: departments
});

export const departmentsFetchError = (err) => ({
  type: ActionTypes.DEPARTMENTS_FETCH_ERROR,
  payload: err
});

// fetch Staffs in a Department

export const staffsInDeptFetchLoading = () => ({
  type: ActionTypes.STAFFS_IN_DEPT_FETCH_LOADING
});

export const staffsInDeptFetchSuccess = (staffsInDept) => ({
  type: ActionTypes.STAFFS_IN_DEPT_FETCH_SUCCESS,
  payload: staffsInDept
});

export const staffsInDeptFetchError = (err) => ({
  type: ActionTypes.STAFFS_IN_DEPT_FETCH_ERROR,
  payload: err
});

// fetch Staff's Salaries

export const salariesFetchLoading = () => ({
  type: ActionTypes.SALARIES_FETCH_LOADING
});

export const salariesFetchSuccess = (salaries) => ({
  type: ActionTypes.SALARIES_FETCH_SUCCESS,
  payload: salaries
});

export const salariesFetchError = (err) => ({
  type: ActionTypes.SALARIES_FETCH_ERROR,
  payload: err
});

// change staffs to make a new staff list
export const staffsNewList = (input) => ({
  type: ActionTypes.STAFFS_NEW_LIST,
  payload: input
})