import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";

const StaffItem = ({ staff }) => {
  return (
    <Link key={staff.id} to={`/staffs/${staff.id}`} className="col-6 col-md-4 col-lg-2 p-2">
      <Card>
        <CardImg top width="100%" src={staff.image} alt={staff.name} />
        <CardBody>
          <CardTitle className="text-center">{staff.name}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
}

export default StaffItem; 