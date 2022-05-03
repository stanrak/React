import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import Payroll from './PayrollComponent';
import { DEPARTMENTS, ROLE, STAFFS } from '../shared/staffs';
import { Switch, Redirect, Route } from 'react-router-dom';
import RenderStaff from './StaffComponent';

// add local staff data to staff list
function allStaffs() {
  let allItems = [];
  Object.values({ ...localStorage }).forEach(e => allItems.push(JSON.parse(e)));
  console.log("allItems la:", allItems);
  console.log([...STAFFS, ...allItems]);
  //return [...STAFFS, localItems];
}

// main
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: DEPARTMENTS,
      role: ROLE,
      staffs: allStaffs()
    };

    this.addStaff = this.addStaff.bind(this);
  }

  // add new staff data getting from StaffList to local storage
  addStaff(staffInfo) {
    const id = Math.floor(Math.random() * 100000 + 1);
    const newStaff = { id, ...staffInfo };

    // set newStaff as a new local storage item
    localStorage.setItem(id, JSON.stringify(newStaff));

    // set new state
    this.setState({ staffs: allStaffs() });
  }

  render() {
    const StaffWithId = ({match}) => {
      const staffId = match.params.staffId;
      console.log("id la: ", staffId);
      const staff = this.state.staffs.find(s => s.id === parseInt(staffId, 10));
      console.log("staffwithId la: ", staff);
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