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
    const customerComment = dish.comments.map((comt) => {
      return (
        <div key={comt.id}>
          <CardText className="my-3"><blockquote class="blockquote">{comt.comment}</blockquote></CardText>
          <CardText className="my-3">- {comt.author} | Rating: {comt.rating} | {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comt.date)))}</CardText>
        </div>
      );
    });

    return (
      <div>{customerComment}</div>
    );
  }

  render() {
    if (this.props.dish != null) {
      return (
      <div className="container">
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardBody>
                <CardTitle>Comments</CardTitle>
                <CardText>All comments for this Dish</CardText>
                {this.renderComment(this.props.dish)}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
    } else {return(<div></div>)}
  }
}