import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

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

  render() {
    // chu y chua co list staff nen staff chua co staff.name, staff.id, props staff
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
      // cho tung card vao, cac card se hien thi tren desktop, tablet, mobile tuong ung 3, 2, 1 cot
      // cho vao giua cac card la thoong tin cua tung nhan vien, sau do xu ly click bang ham click
      <div className='container-fluid'>
        <div className='row'>
          {staff}
        </div>
      </div>
    );
  }
}