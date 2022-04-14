import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap';

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
        <div className='container'>
          <div className='row m-3 justify-content-between'>
            <div className='d-flex align-items-center'>
              <h2>Danh sách nhân viên</h2>
            </div>
            <div className='d-flex align-items-center'>
              <div className='row'>
                <Button className='m-2' onClick={() => this.gridSelect("reset")}>Reset</Button>
                <Button className='m-2' onClick={() => this.gridSelect("1-cols")}>1 cột</Button>
                <Button className='m-2' onClick={() => this.gridSelect("2-cols")}>2 cột</Button>
                <Button className='m-2' onClick={() => this.gridSelect("3-cols")}>3 cột</Button>
                <Button className='m-2' onClick={() => this.gridSelect("4-cols")}>4 cột</Button>
                <Button className='m-2' onClick={() => this.gridSelect("6-cols")}>6 cột</Button>
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
      </div>
    );
  }
}