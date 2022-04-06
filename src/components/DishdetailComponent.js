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

  renderComment(dish) {
    console.log(dish);
    console.log(dish.comments);

    dish.comments.map((comt) => {
      console.log(comt);
      return (
        <div key={comt.id}>
          {comt.comment}
          {comt.author}
        </div>
      );
    });
  }

  render() {
    return (
      <div className='row'>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardBody>
              <CardTitle>Comments</CardTitle>
              <CardText>All comments for this Dish</CardText>
              <CardText>{this.renderComment(this.props.dish)}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}