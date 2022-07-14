import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import PayrollList from './PayrollListComponent';
import RenderStaff from './StaffComponent';
import RenderDepartment from './DepartmentComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';

class Main extends Component {
  // add new staff data getting from StaffList to this staff list
  // addStaff(staff) {
  //   const id = Math.floor(Math.random() * 100000 + 1);
  //   const newStaff = { id, ...staff };
  //   this.setState({
  //     staffs: [...this.state.staffs, newStaff]
  //   });
  // }

  // fetch staffs and departments's data

  render() {
    const StaffWithId = ({match}) => {
      return (
        <RenderStaff id={match.params.staffId} />
      );
    }

    const DepartmentWithId = ({ match }) => {
      return (
        <RenderDepartment id={match.params.departmentId} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <StaffList />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route exact path="/departments" component={() => <DepartmentList />} />
          <Route path="/departments/:departmentId" component={DepartmentWithId} />
          <Route exact path="/payroll" component={() => <PayrollList />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);