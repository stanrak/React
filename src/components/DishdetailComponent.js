import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComment({comments}) {
  const customerCmt = comments.map((cmt) => {
    return (
      <div key={cmt.id}>
        <CardText className="my-3"><blockquote className="blockquote">{cmt.comment}</blockquote></CardText>
        <CardText className="my-3">- {cmt.author} | Rating: {cmt.rating} | {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</CardText>
      </div>
    );
  });

  return (
    <Card>
      <CardBody>
        <CardTitle>Comments</CardTitle>
        <CardText>All comments for this Dish</CardText>
        {customerCmt}
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className='row'>
        <Breadcrumb>
          <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className='col-12'>
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className='row'>
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComment comments={props.comments} />
        </div>
      </div>
    </div>
  );
}

export default DishDetail;