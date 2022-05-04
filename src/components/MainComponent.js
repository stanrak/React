import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import StaffList from './StaffListComponent';
import DepartmentList from './DepartmentListComponent';
import Payroll from './PayrollComponent';
import RenderStaff from './StaffComponent';
import { Switch, Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    departments: state.departments,
    role: state.role,
    staffs: state.staffs
  }
}

class Main extends Component {
  constructor(props) {
    super(props);

    //this.addStaff = this.addStaff.bind(this);
  }

  // add new staff data getting from StaffList to this staff list
  // addStaff(staff) {
  //   const id = Math.floor(Math.random() * 100000 + 1);
  //   const newStaff = { id, ...staff };
  //   this.setState({
  //     staffs: [...this.state.staffs, newStaff]
  //   });
  // }

  render() {
    const StaffWithId = ({match}) => {
      const id = match.params.staffId;
      const staff = this.props.staffs.find(s => s.id === parseInt(id,10));
      return (
        <RenderStaff staff={staff}/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <StaffList staffs={this.props.staffs} />} />
          <Route path="/staffs/:staffId" component={StaffWithId} />
          <Route exact path="/departments" component={() => <DepartmentList departments={this.props.departments} />} />
          <Route exact path="/payroll" component={() => <Payroll staffs={this.props.staffs} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

//onAdd={this.addStaff} 