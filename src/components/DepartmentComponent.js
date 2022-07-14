import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import StaffItem from './StaffItemComponent';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchStaffsInDept, fetchDepartments } from '../redux/fetch';
import LoadingSpinner from './LoadingSpinnerComponent';

const mapStateToProps = state => ({
  staffsInDept: state.staffsInDept,
  departments: state.departments
});

const mapDispatchToProps = dispatch => ({
  fetchDepartments: () => { dispatch(fetchDepartments()) },
  fetchStaffsInDept: (id) => { dispatch(fetchStaffsInDept(id)) }
});

class RenderDepartment extends Component {
  componentDidMount() {
    const { id, fetchStaffsInDept, fetchDepartments } = this.props;
    fetchDepartments();
    fetchStaffsInDept(id);
  }

  render() {
    const { id, staffsInDept, departments } = this.props;
    let staff, departmentName;

    if (staffsInDept.isLoading === true || departments.isLoading === true) return <LoadingSpinner />
    
    const department = departments.departments.find(d => d.id === id);
    if (departments.errMess !== null) { departmentName = <div><p></p></div> }
    else if (department === undefined) { departmentName = <div><p></p></div> }
    else { departmentName = department.name }

    if (staffsInDept.errMess !== null) { staff = <div><p>Kết nối tới server bị lỗi, các bạn chờ 30s rồi tải lại, nếu không được thì chờ 1h rồi tải lại</p></div> }
    else if (staffsInDept.staffsInDept.length === 0) { staff = <div><p>Phòng ban này hiện chưa có nhân viên</p></div> }
    else { staff = staffsInDept.staffsInDept.map(s => { return <StaffItem staff={s} key={s.id} /> })}

    return (
      <div className="container-fluid">
        <div className='row m-3'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/departments'>Phòng ban</Link></BreadcrumbItem>
            <BreadcrumbItem active>{departmentName}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='row m-3 justify-content-between'>
          <div className='d-flex align-items-center'>
            <h2 className='d-flex m-0'>Danh sách nhân viên</h2>
          </div>
        </div>
        <div className="row m-3"> 
          {staff}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderDepartment);