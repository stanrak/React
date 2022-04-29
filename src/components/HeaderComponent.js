import React, { Component } from "react";
import { Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({isNavOpen: !this.state.isNavOpen});
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante con Fusion" />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/staffs">
                    <span className="fa fa-group fa-lg"> Nhân viên</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/departments">
                    <span className="fa fa-address-card fa-lg"> Phòng ban</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/payroll">
                    <span className="fa fa-money fa-lg"> Bảng lương</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;