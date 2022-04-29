import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from 'dateformat';
import { Link } from "react-router-dom";

class RenderStaff extends Component {
  render() {
    let staff = this.props.staff;
    return (
      <div className="container-fluid">
        <div className='row m-3'>
          <Breadcrumb>
            <BreadcrumbItem><Link to='/staffs'>Nhân viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='row m-3'>
          <div className='d-flex align-items-center'>
            <h2>Thông tin nhân viên</h2>
          </div>
        </div>
        <div className="row m-3"> 
          <div className="col-12 col-md-4 col-lg-3 p-1">
            <img width="100%" src={staff.image} alt={staff.name} />
          </div>
          <div className="col-12 col-md-8 col-lg-9 p-1">
            <h2>{staff.name}</h2>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
            <p>Phòng ban: {staff.department.name}</p>
            <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
            <p>Số giờ đã làm thêm: {staff.overTime}</p>
            <p>Hệ số lương: {staff.salaryScale}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderStaff;