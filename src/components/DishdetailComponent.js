import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default class DishDetail extends Component {
  renderDish(dish) {
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

  renderComment(comments) {
    const customerCmt = comments.map((cmt) => {
      return (
        <div key={cmt.id}>
          <CardText className="my-3">{cmt.comment}</CardText>
          <CardText className="my-3">- {cmt.author}</CardText>
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

  render() {
    return (
      <div className='row'>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComment(this.props.dish.comments)}
        </div>
      </div>
    );
  }
}