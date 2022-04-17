import React from "react";
import { Alert, Card, CardBody, CardText, CardTitle } from "reactstrap";

const Payroll = (props) => {
  const staffSalary = props.staffs.map((s) => {
    let salary = Math.round(s.salaryScale * 3000000 + s.overTime / 8 * 200000);
    return (
      <div key={s.id} className="col-12 col-md-6 col-lg-4 my-2">
        <Card>
          <CardBody>
            <CardTitle>{s.name}</CardTitle>
            <CardText>Mã nhân viên: {s.id}</CardText>
            <CardText>Hệ số lương: {s.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {s.overTime}</CardText>
            <Alert color="dark">Lương: {salary}</Alert>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className='container'>
      <div className='row m-3'>
        <h2>Bảng lương</h2>
      </div>
      <div className="row m-3">
        {staffSalary}
      </div>
    </div>
  );
}

export default Payroll;