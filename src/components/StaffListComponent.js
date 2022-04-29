import React, { Component } from 'react';
import {
  Button, Input, Label, InputGroupAddon, InputGroup,
  Modal, ModalHeader, ModalBody, ModalFooter, FormGroup
} from 'reactstrap';
import StaffItem from './StaffItemComponent';

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: this.props.staffs,
      newStaff: {
        name: '',
        doB: '',
        salaryScale: '',
        startDate: '',
        department: '',
        annualLeave: '',
        overTime: '',
        salary: '',
        image: '/assets/images/alberto.png'
      }
    }
    
    this.newStaffList = this.newStaffList.bind(this);
  }

  handleSummit() {

  }

  RenderModal() {
    return (
      <div className='flex'>
        <Button>
          <i className="fa fa-plus fa-lg"> Thêm nhân viên</i>
        </Button>
        <Modal>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSummit}>
              <FormGroup row>
                <Label htmlFor="name" md={2}>Tên nhân viên:</Label>
                <Col md={10}>
                  <Input type="text" id="name" name="name"
                    placeholder="Tên nhân viên" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="dob" md={2}>Ngày sinh:</Label>
                <Col md={10}>
                  <Input type="date" id="dob" name="dob"
                    placeholder="Ngày sinh" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={2}>Hệ số lương:</Label>
                <Col md={10}>
                  <Input type="text" id="salaryScale" name="salaryScale"
                    placeholder="Hệ số lương" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startdate" md={2}>Ngày vào công ty:</Label>
                <Col md={10}>
                  <Input type="date" id="startdate" name="startdate"
                    placeholder="Ngày vào công ty" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={2}>Phòng ban:</Label>
                <Col md={10}>
                  <Input type="text" id="department" name="department"
                    placeholder="Phòng ban" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualleave" md={2}>Số ngày nghỉ còn lại:</Label>
                <Col md={10}>
                  <Input type="text" id="annualleave" name="annualleave"
                    placeholder="Số ngày nghỉ còn lại" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overtime" md={2}>Số giờ đã làm thêm:</Label>
                <Col md={10}>
                  <Input type="text" id="overtime" name="overtime"
                    placeholder="Số giờ đã làm thêm" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salary" md={2}>Mức lương:</Label>
                <Col md={10}>
                  <Input type="text" id="salary" name="salary"
                    placeholder="Mức lương" />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Submit</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  //newStaffList method: create a new staff list by user's input value, using Uncontrolled Form
  newStaffList() {
    const newStaffList = this.props.staffs.filter((s) => {
      return s.name.toLowerCase().indexOf(this.elemt.value.toLowerCase()) !== -1;
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
            <Input type="text" name="staff_filter" id="staff-filter" innerRef={(input) => this.elemt = input}/>
            <InputGroupAddon addonType="append">
              <Button onClick={this.newStaffList}>
                <i className="fa fa-search"></i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className='row m-3 justify-content-between'>
          <h2 className='d-flex m-0'>Danh sách nhân viên</h2>
          <RenderModal />
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