import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

const DepartmentList = (props) => {
  const department = props.departments.map(d => {
    return (
      <div key={d.id} className="col-12 col-md-6 col-lg-4 my-3">
        <Card>
          <CardBody>
            <CardTitle>{ d.name }</CardTitle>
            <CardText>Số lượng nhân viên: { d.numberOfStaff }</CardText>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row m-3'>
        <h2>Danh sách Phòng ban</h2>
      </div>
      <div className="row m-3">
        {department}
      </div>
    </div>
  );
}

export default DepartmentList;