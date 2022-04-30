
const initialStaffState = {
  //mấy thuộc tính của staff
  name: '',
  doB: '',
  salaryScale: '',
  startDate: '',
  department: '',
  annualLeave: '',
  overTime: '',
  salary: '',
  image:''
};

export const formStaff = createForms({
  staff: initialStaffState,
});