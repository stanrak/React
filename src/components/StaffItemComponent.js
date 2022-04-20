import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

export default function StaffItem(props) {
  let staff = props.staff;
  return (
    <div key={staff.id} className="col-6 col-md-4 col-lg-2">
      <Card className="m-2">
        <Link to={`/staffs/${staff.id}`}>
          <CardImg top width="100%" src={staff.image} alt={staff.name} />
        </Link>
        <CardBody>
          <CardTitle className="text-center">{staff.name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}