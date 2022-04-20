import React, { Component } from 'react';
import { Button, Input, Label, InputGroupAddon, InputGroup } from 'reactstrap';
import StaffItem from './StaffItemComponent';

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: this.props.staffs,
      inputValue: "",
    }
    this.newStaffList = this.newStaffList.bind(this);
  }

  updateInput(evt) {
    this.setState({ inputValue: evt.target.value });
  }

  newStaffList() {
    const newStaffList = this.props.staffs.filter((s) => {
      return s.name.toLowerCase().indexOf(this.state.inputValue.toLowerCase()) !== -1;
    })
    this.setState({ staffs: newStaffList })
  }

  render() {
    const staff = this.state.staffs.map(s => {
        return <StaffItem staff={s} key={s.id} />;
      });

    return (
      <div className='container'>
        <div className='m-3'>
          <Label for="staff-filter">Tìm kiếm nhân viên</Label>
          <InputGroup>
            <Input type="text" name="staff_filter" id="staff-filter" onChange={e => this.updateInput(e)}/>
            <InputGroupAddon addonType="append">
              <Button onClick={this.newStaffList}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className='row m-3 justify-content-between'>
          <h2>Danh sách nhân viên</h2>
        </div>
        <div className='row m-3'>
          {staff}
        </div>
        <div className='m-3'>(*) Bấm vào tên nhân viên để xem thông tin</div>
      </div>
    );
  }
}

export default StaffList;