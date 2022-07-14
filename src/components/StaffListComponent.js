import React, { Component } from 'react';
import {
  Button, Input, Label, InputGroupAddon, InputGroup
} from 'reactstrap';
import StaffItem from './StaffItemComponent';
import { connect } from 'react-redux';
import { fetchStaffs } from '../redux/fetch';
import { staffsNewList } from '../redux/ActionCreator';
import LoadingSpinner from './LoadingSpinnerComponent';

const mapStateToProps = state => ({
  staffs: state.staffs
});

const mapDispatchToProps = dispatch => ({
  fetchStaffs: () => { dispatch(fetchStaffs()) },
  staffsNewList: input => { dispatch(staffsNewList(input))}
});


class StaffList extends Component {  
  componentDidMount() {
    const { fetchStaffs } = this.props;
    fetchStaffs();
  }

  render() {
    const { staffs, staffsNewList } = this.props;
    const staff = staffs.staffs.map(s => { return <StaffItem staff={s} key={s.id} /> });
    if (staffs.isLoading === true) return <LoadingSpinner />

    return (
      <div className='container'>
        <div className='m-3'>
          <Label for="staff-filter">Tìm kiếm nhân viên</Label>
          <InputGroup>
            <Input type="text" name="staff_filter" id="staff-filter" innerRef={(input) => this.element = input}/>
            <InputGroupAddon addonType="append">
              <Button onClick={() => staffsNewList(this.element)}>
                <i className="fa fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className='row m-3 justify-content-between'>
          <h2 className='d-flex m-0'>Danh sách nhân viên</h2>
        </div>
        <div className='row m-3'>
          {staff}
        </div>
        <div className='m-3'>(*) Bấm vào tên nhân viên để xem thông tin</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaffList);