import React, { Component } from "react";
import {
  Card, CardBody, CardImg, CardText, CardTitle, Breadcrumb, BreadcrumbItem,
  Button, Modal, ModalHeader, ModalBody, CardFooter, Label, Col, Row
} from "reactstrap";
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

function RenderDish({dish}) {
  return (
    <FadeTransform in transformProps={{ exitTransform: 'scale(0.5) translateY(-50%)' }}>
      <Card>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function RenderComment({comments, postComment, dishId}) {
  const customerCmt = comments.map((cmt) => {
    return (
      <Fade key={cmt.id} in>
        <div >
          <blockquote className="blockquote"><CardText className="my-3">{cmt.comment}</CardText></blockquote>
          <CardText className="my-3">- {cmt.author} | Rating: {cmt.rating} | {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</CardText>
        </div>
      </Fade>
    );
  });

  return (
    <Card>
      <CardBody>
        <CardTitle>Comments</CardTitle>
        <CardText>All comments for this Dish</CardText>
        <Stagger in>
          {customerCmt}
        </Stagger>
      </CardBody>
      <CardFooter>
        <CommentForm dishId={dishId} postComment={postComment} />
      </CardFooter>
    </Card>
  );
}

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  handleSubmit(values) {
    this.toggleModal();
    this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleModal}>
          <span className="fa fa-info fa-lg"> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" id="rating" name="rating" className="form-control">
                    <option selected disabled>Choose your rating</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                    className="form-control"
                    validators={{required, minLength: minLength(3), maxLength: maxLength(15)}}
                  />
                  <Errors
                    className='text-danger'
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>Your Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".comment" id="comment" name="comment" placeholder="Your comment here..."
                    className="form-control" rows="6"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="summit" color="primary">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return(
      <div className="container">
        <div className="row">            
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return(
      <div className="container">
        <div className="row">            
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
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
            <RenderComment comments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;