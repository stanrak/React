import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
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
    const StaffWithId = ({match}) => {
      const id = match.params.staffId;
      const staff = this.state.staffs.find(s => s.id === parseInt(id,10));
      return (
        <RenderStaff staff={staff}/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <StaffList staffs={this.state.staffs} />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route exact path="/departments" component={() => <DepartmentList departments={this.state.departments} />} />
          <Route exact path="/payroll" />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;