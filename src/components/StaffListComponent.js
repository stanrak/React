import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap';
import dateFormat from 'dateformat';

const defaultGrid = 'col-12 col-md-6 col-lg-4';

const GRID = {
  "1-cols": "col-12",
  "2-cols": "col-12 col-md-6",
  "3-cols": "col-12 col-md-4",
  "4-cols": "col-12 col-md-4 col-lg-3",
  "6-cols": "col-12 col-md-4 col-lg-2"
}

export default class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
      selectedGrid: defaultGrid
    }
  }
  
  staffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  gridSelect(colNum) {
    if (colNum === "reset") {
      this.setState({ selectedGrid: defaultGrid });
    } else {
      this.setState({ selectedGrid: GRID[colNum] });
    }
  }

  renderStaff(staff) {
    if (staff != null) {
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
    } else {return (<div></div>)}
  }

  render() {
    const staff = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className={this.state.selectedGrid}>
          <Card className="m-2" onClick={() => this.staffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className='container-fluid'>
          <div className='row m-3 justify-content-between'>
            <div className='d-flex align-items-center'>
              <h2>Danh sách nhân viên</h2>
            </div>
            <div className='d-flex align-items-center'>
              <div className='row'>
                <Button onClick={() => this.gridSelect("reset")}>Reset</Button>
                <Button onClick={() => this.gridSelect("1-cols")}>1 cột</Button>
                <Button onClick={() => this.gridSelect("2-cols")}>2 cột</Button>
                <Button onClick={() => this.gridSelect("3-cols")}>3 cột</Button>
                <Button onClick={() => this.gridSelect("4-cols")}>4 cột</Button>
                <Button onClick={() => this.gridSelect("6-cols")}>6 cột</Button>
              </div>
            </div>
          </div>
          <div className='row m-3'>
            {staff}
          </div>
          <div className='row m-3'>
            <div className='col-12 d-flex align-items-center'>
              <span>Bấm vào tên nhân viên để xem thông tin</span>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          {this.renderStaff(this.state.selectedStaff)}
        </div>
      </div>
    );
  }
}