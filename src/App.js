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
        <div className='w-100' style={{backgroundColor:'blue', color:'white'}}>
          <p>Ứng dụng quản lý nhân sự v1.0</p>
        </div>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;