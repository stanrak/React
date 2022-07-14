import { baseUrl } from '../shared/baseUrl';
import { staffsFetchLoading, staffsFetchSuccess, staffsFetchError } from './ActionCreator';
import { departmentsFetchLoading, departmentsFetchSuccess, departmentsFetchError } from './ActionCreator';
import { staffsInDeptFetchLoading, staffsInDeptFetchSuccess, staffsInDeptFetchError } from './ActionCreator';
import { salariesFetchLoading, salariesFetchSuccess, salariesFetchError } from './ActionCreator';

// fetch Staffs from API
export const fetchStaffs = () => dispatch => {
  dispatch(staffsFetchLoading());

  fetch(baseUrl + 'staffs')
    .then(res => res.json())
    .then(res => {
      dispatch(staffsFetchSuccess(res));
      return res.staffs;
    })
    .catch(error => {
      dispatch(staffsFetchError(error));
    });
}

// fetch Departments from API
export const fetchDepartments = () => dispatch => {
  dispatch(departmentsFetchLoading());

  fetch(baseUrl + 'departments')
    .then(res => res.json())
    .then(res => {
      dispatch(departmentsFetchSuccess(res));
      return res.departments;
    })
    .catch(error => {
      dispatch(departmentsFetchError(error));
    });
}

// fetch Staffs in a Department from API
export const fetchStaffsInDept = (id) => {
  return dispatch => {
    dispatch(staffsInDeptFetchLoading());

    fetch(baseUrl + 'departments/' + id)
      .then(res => res.json())
      .then(res => {
        dispatch(staffsInDeptFetchSuccess(res));
        return res.staffsInDept;
      })
      .catch(error => {
        dispatch(staffsInDeptFetchError(error));
      });
  }
}

// fetch Salary from API
export const fetchSalaries = () => dispatch => {
  dispatch(salariesFetchLoading());

  fetch(baseUrl + 'staffsSalary')
    .then(res => res.json())
    .then(res => {
      dispatch(salariesFetchSuccess(res));
      return res.salaries;
    })
    .catch(error => {
      dispatch(salariesFetchError(error));
    });
}