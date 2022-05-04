import React, { Component } from 'react';
import {
  Button, Input, Label, InputGroupAddon, InputGroup,
  Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Col, FormFeedback, Row
} from 'reactstrap';
import StaffItem from './StaffItemComponent';
import { Control, LocalForm, Errors } from 'react-redux-form';

const defaultValue = {
  salaryScale: 1,
  annualLeave: 0,
  overTime: 0,
  salary: 3000000,
  image: '/assets/images/alberto.png'
}

const required = (val) => val;
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: this.props.staffs,
      isModalOpen: false
    }
    
    this.newStaffList = this.newStaffList.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    // let { salaryScale, annualLeave, overTime, salary, image } = defaultInput;
    // if (this.state.newStaff.salaryScale !== "") { salaryScale = this.state.newStaff.salaryScale };
    // if (this.state.newStaff.annualLeave !== "") { annualLeave = this.state.newStaff.annualLeave };
    // if (this.state.newStaff.overTime !== "") { overTime = this.state.newStaff.overTime };
    // if (this.state.newStaff.salary !== "") { salary = this.state.newStaff.salary };

    // const newStaff = {
    //   name: this.state.newStaff.name,
    //   doB: this.state.newStaff.doB,
    //   salaryScale: salaryScale,
    //   startDate: this.state.newStaff.startDate,
    //   department: this.state.newStaff.department,
    //   annualLeave: annualLeave,
    //   overTime: overTime,
    //   salary: salary,
    //   image: image
    // };
    
    // this.props.onAdd(newStaff);
  }

  renderModal() {
    return (
      <div>
        <Button className='flex' onClick={this.toggleModal}>
          <i className="fa fa-plus fa-lg"> Thêm nhân viên</i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <LocalForm model="staff" onSubmit={staff => this.handleSubmit(staff)}>
              <Row className="form-group">
                <Label htmlFor="name" md={4}>Tên nhân viên:</Label>
                <Col md={8}>
                  <Control.text model="name" id="name" name="name"
                    placeholder="Tên nhân viên"
                    className="form-group"
                    validators={{required, minLength: minLength(3)}}
                  />
                  <Errors
                    className='text-danger'
                    model="name"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="doB" md={4}>Ngày sinh:</Label>
                <Col md={8}>
                  <Control.date model="doB" id="doB" name="doB"
                    //value={this.state.newStaff.doB}
                    validators={{required}}
                  />
                  <Errors
                    className='text-danger'
                    model="doB"
                    show="touched"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salaryScale" md={4}>Hệ số lương:</Label>
                <Col md={8}>
                  <Control.text model="salaryScale" id="salaryScale" name="salaryScale"
                    placeholder="Hệ số lương"
                    validators={{isNumber}}
                  />
                  <Errors
                    className='text-danger'
                    model="salaryScale"
                    show="touched"
                    messages={{
                      isNumber: "Must be a number"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="startDate" md={4}>Ngày vào công ty:</Label>
                <Col md={8}>
                  <Control.date model="startDate" id="startDate" name="startDate"
                    //value={this.state.newStaff.startDate}
                    validators={{required}}
                  />
                  <Errors
                    className='text-danger'
                    model="startDate"
                    show="touched"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="department" md={4}>Phòng ban:</Label>
                <Col md={8}>
                  <Control.text model="department" id="department" name="department"
                    placeholder="Phòng ban"
                    validators={{required}}
                  />
                  <Errors
                    className='text-danger'
                    model="department"
                    show="touched"
                    messages={{
                      required: "Required"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại:</Label>
                <Col md={8}>
                  <Control.text model="annualLeave" id="annualLeave" name="annualLeave"
                    placeholder="Số ngày nghỉ còn lại"
                    validators={{isNumber}}
                  />
                  <Errors
                    className='text-danger'
                    model="annualLeave"
                    show="touched"
                    messages={{
                      isNumber: "Must be a number"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="overTime" md={4}>Số giờ đã làm thêm:</Label>
                <Col md={8}>
                  <Control.text model="overTime" id="overTime" name="overTime"
                    placeholder="Số giờ đã làm thêm"
                    validators={{isNumber}}
                  />
                  <Errors
                    className='text-danger'
                    model="overTime"
                    show="touched"
                    messages={{
                      isNumber: "Must be a number"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="salary" md={4}>Mức lương:</Label>
                <Col md={8}>
                  <Control.text model="salary" id="salary" name="salary"
                    placeholder="Mức lương"
                    validators={{isNumber}}
                  />
                  <Errors
                    className='text-danger'
                    model="salary"
                    show="touched"
                    messages={{
                      isNumber: "Must be a number"
                    }}
                  />
                </Col>
              </Row>
              <Button color="secondary" type="submit">Thêm</Button>
            </LocalForm>
          </ModalBody>
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
    const staff = this.state.staffs.map(s => { return <StaffItem staff={s} key={s.id} /> });
    
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
          {this.renderModal()}
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