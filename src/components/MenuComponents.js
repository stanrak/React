import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      console.log("renderDish - menuCom: chuyen dish tu MenuCom sang DishDetail: dish");
      console.log(dish);
      
      return (
        <div>
          <DishDetail dish />
        </div>
      );
    } else {return (<div></div>)}
  }

  render() {
    console.log("chuyen dish array tu app ve menu component: props, props.dishes");
    console.log(this.props);
    console.log(this.props.dishes);

    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className = 'container' >
        <div className='row'>
          {menu}
        </div>
        <div className='row'>
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;