import React, { Component } from 'react';
import { Navbar, ButtonGroup, Button } from 'reactstrap';
import './App.css';
import StaffList from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS
    };
  }

  render() {
    return (
      <div className="App">
        <div className='bg-primary d-flex p-3 text-white align-items-center' style={{height:'3vw'}}>
          <span>Ứng dụng quản lý nhân sự v1.0</span>
        </div>
        <div className='container-fluid'>
          <div className='row justify-content-between'>
            <div className='col-12 col-md-6 col-lg-4 d-flex align-items-center'>
              <span>Danh sách nhân viên</span>
            </div>
            <div className='col-12 col-md-6 col-lg-4'>
              <ButtonGroup>
                <Button>1 cột</Button>
                <Button>2 cột</Button>
                <Button>3 cột</Button>
                <Button>4 cột</Button>
                <Button>6 cột</Button>
              </ButtonGroup>
            </div>
          </div>
          <StaffList staffs={this.state.staffs} />
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;