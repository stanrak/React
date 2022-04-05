import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default class DishDetail extends Component {
  renderDish(dish) {
    console.log("renderDish: chuyen dish tu render sang rendderDish: props, dish");
    console.log(this.props);
    console.log(this.props.dish);

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
    console.log("renderCommment: chuyen dish tu render sang rendercomment: props, dish (khong phai props.dish)");
    console.log(this.props);
    console.log(dish);

    dish.comments.map((comt) => {
      return (
        <li>
          <CardText>{comt.comment}</CardText>
          <CardText>{comt.author}</CardText>
        </li>
      );
    });
  }

  render() {
    console.log("render: chuyen dish tu menu com sang dishDetailCom: props, props.dish");
    console.log(this.props);
    console.log(this.props.dish);

    return (
      <div>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardBody>
              <CardTitle>Comments</CardTitle>
              <CardText>All comments for this Dish</CardText>
              <ul>
                {this.renderComment(this.props.dish)}
              </ul>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}