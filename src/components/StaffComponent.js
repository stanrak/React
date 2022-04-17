import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import dateFormat from 'dateformat';
import { STAFFS } from '../shared/staffs';

class RenderStaff extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let id = this.props.match.params.staffId;
    let staff = STAFFS.find(s => s.id === parseInt(id));
    return (
      <div>
        <div className='row m-3'>
          <div className='d-flex align-items-center'>
            <h2>Thông tin nhân viên</h2>
          </div>
        </div>
        <div className='row m-3'>
          <div className='col-12 col-md-6 col-lg-4'>
            <Card className="m-2">
              <CardImg top width="100%" src={staff.image} alt={staff.name} />
              <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                <CardText>Phòng ban: {staff.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                <CardText>Bậc lương: {staff.salaryScale}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default RenderStaff;