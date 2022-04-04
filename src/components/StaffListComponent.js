import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';

export default class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null
    }
  }

  staffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className='col-12 col-md-6 col-lg-4'>
          <Card>
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
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className='col-12 col-md-6 col-lg-4'>
          <Card onClick={() => this.staffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className='container-fluid'>
        <div className='row'>
          {staff}
        </div>
        <p>Bấm vào tên nhân viên để xem thông tin</p>
        <div className='row'>
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    );
  }
}