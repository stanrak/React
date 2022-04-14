import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import { Switch, Redirect, Route } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      departments: DEPARTMENTS,
      role: ROLE,
      staffs: STAFFS
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/staffs" />
          <Route exact path="/departments" />
          <Route exact path="/payroll" />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;