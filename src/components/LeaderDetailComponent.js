import React from "react";
import { Col, Media } from "reactstrap";

const RenderLeader = (props) => {
  let l = props.leader;
  return (
    <Media tag="li">
      <Col md={2}>
        <Media object data-src={l.image} alt={l.designation} />
      </Col>
      <Media body className="col-10 m-1">
        <Media heading>
          {l.name}
        </Media>
        {l.designation}
        <p>{l.description}</p>
      </Media>
    </Media>
  );
}

export default RenderLeader;