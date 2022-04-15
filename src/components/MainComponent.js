import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import { Switch, Redirect, Route } from 'react-router-dom';
import RenderStaff from './StaffComponent';

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
          <Route exact path="/staffs" component={() => <StaffList staffs={this.state.staffs}/>} />
          <Route path="/staffs/:staffId" component={RenderStaff} />
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