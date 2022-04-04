import React, { Component } from 'react';
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
          <span className='m-4'>Ứng dụng quản lý nhân sự v1.0</span>
        </div>
        <div className='container-fluid'>
          <StaffList staffs={this.state.staffs} />
        </div>
      </div>
    );
  }
}

export default App;