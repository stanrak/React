import React, { Component } from 'react';
import {
  Button, Input, Label, InputGroupAddon, InputGroup,
  Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Col, FormFeedback
} from 'reactstrap';
import StaffItem from './StaffItemComponent';
import { Control, actions } from 'react-redux-form';

const defaultInput = {
  salaryScale: 1,
  annualLeave: 0,
  overTime: 0,
  salary: 3000000,
  image: '/assets/images/alberto.png'
}

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: this.props.staffs,
      isModalOpen: false,
      newStaff: {
        name: '',
        doB: '',
        salaryScale: '',
        startDate: '',
        department: '',
        annualLeave: '',
        overTime: '',
        salary: '',
        touched: {
          name: false,
          doB: false,
          startDate: false,
          department: false
        }
      }
    }
    
    this.newStaffList = this.newStaffList.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      newStaff: { ...this.state.newStaff, [name]: value }
    });
  }

  handleSubmit() {
    let { salaryScale, annualLeave, overTime, salary, image } = defaultInput;
    if (this.state.newStaff.salaryScale !== "") { salaryScale = this.state.newStaff.salaryScale };
    if (this.state.newStaff.annualLeave !== "") { annualLeave = this.state.newStaff.annualLeave };
    if (this.state.newStaff.overTime !== "") { overTime = this.state.newStaff.overTime };
    if (this.state.newStaff.salary !== "") { salary = this.state.newStaff.salary };

    const newStaff = {
      name: this.state.newStaff.name,
      doB: this.state.newStaff.doB,
      salaryScale: salaryScale,
      startDate: this.state.newStaff.startDate,
      department: this.state.newStaff.department,
      annualLeave: annualLeave,
      overTime: overTime,
      salary: salary,
      image: image
    };
    
    this.props.onAdd(newStaff);
  }

  handleBlur = (field) => (event) => {
    this.setState({
      newStaff: {
        ...this.state.newStaff, touched: {
          ...this.state.newStaff.touched, [field]: true
        }
      }
    });
  }

  validate(name, doB, startDate, department) {
    const errors = {
      name: '',
      doB: '',
      startDate: '',
      department: ''
    };

    if (this.state.newStaff.touched.name && name.length < 3)
      errors.name = "Tên nhân viên phải nhiều hơn 3 kí tự";
    
    let date = new Date();
    let errorDoB = new Date(doB);
    // check if date of birth field filled
    if (this.state.newStaff.touched.doB) {
      if (doB === "")
        errors.doB = "Cần nhập thông tin"
      else if (date.getFullYear() - errorDoB.getFullYear() < 18)
        errors.doB = "Tuổi của nhân viên phải trên 18";
    }
    if (this.state.newStaff.touched.startDate && startDate === "")
      errors.startDate = "Cần nhập thông tin";
    
    if (this.state.newStaff.touched.department && department === "")
      errors.department = "Cần nhập Phòng ban";
    
    return errors;
  }

  renderModal(errors) {
    return (
      <div>
        <Button className='flex' onClick={this.toggleModal}>
          <i className="fa fa-plus fa-lg"> Thêm nhân viên</i>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Thêm nhân viên</ModalHeader>
          <ModalBody>
            <Form model="staff" onSubmit={staff => this.handleSubmit(staff)}>
              <FormGroup row>
                <Label htmlFor="name" md={4}>Tên nhân viên:</Label>
                <Col md={8}>
                  <Control.text model="name" id="name"
                    placeholder="Tên nhân viên"
                    value={this.state.newStaff.name}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>Ngày sinh:</Label>
                <Col md={8}>
                  <Control.date model="doB" id="doB"
                    value={this.state.newStaff.doB}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>Hệ số lương:</Label>
                <Col md={8}>
                  <Control.text model="salaryScale" id="salaryScale"
                    placeholder="Hệ số lương"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>Ngày vào công ty:</Label>
                <Col md={8}>
                  <Control.date model="startDate" id="startDate"
                    value={this.state.newStaff.startDate}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>Phòng ban:</Label>
                <Col md={8}>
                  <Control.text model="department" id="department"
                    placeholder="Phòng ban"
                    value={this.state.newStaff.department}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại:</Label>
                <Col md={8}>
                  <Control.text model="annualLeave" id="annualLeave"
                    placeholder="Số ngày nghỉ còn lại"
                    value={this.state.newStaff.annualLeave}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>Số giờ đã làm thêm:</Label>
                <Col md={8}>
                  <Control.text model="overTime" id="overTime"
                    placeholder="Số giờ đã làm thêm"
                    value={this.state.newStaff.overTime}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salary" md={4}>Mức lương:</Label>
                <Col md={8}>
                  <Control.text model="salary" id="salary"
                    placeholder="Mức lương"
                    value={this.state.newStaff.salary}
                  />
                </Col>
              </FormGroup>
              <Button color="secondary" type="submit">Thêm</Button>
            </Form>
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
    
    const errors = this.validate(this.state.newStaff.name, this.state.newStaff.doB,
      this.state.newStaff.startDate, this.state.newStaff.department);

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
          {this.renderModal(errors)}
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