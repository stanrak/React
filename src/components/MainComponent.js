import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import Payroll from './PayrollComponent';
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

    this.addStaff = this.addStaff.bind(this);
  }

  // add new staff to staff list
  addStaff(staffInfo) {
    const id = Math.floor(Math.random() * 100000 + 1);
    const newStaff = { id, ...staffInfo };
    const newStaffList = [...STAFFS, newStaff];

    // set new state
    this.setState({ staffs: newStaffList });
  }

  render() {
    const StaffWithId = ({match}) => {
      const staffId = match.params.staffId;
      const staff = this.state.staffs.find(s => s.id === parseInt(staffId, 10));
      return (
        <RenderStaff staff={staff}/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <StaffList onAdd={this.addStaff} staffs={this.state.staffs} />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route exact path="/departments" component={() => <DepartmentList departments={this.state.departments} />} />
          <Route exact path="/payroll" component={() => <Payroll staffs={this.state.staffs} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;