import React, { Component } from 'react';
import {
  Button, Input, Label, InputGroupAddon, InputGroup,
  Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Form, Col
} from 'reactstrap';
import StaffItem from './StaffItemComponent';

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
          startDate: false
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
    let [salaryScale, annualLeave, overTime, salary, image] = defaultInput;
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

  validate(name, doB) {
    const errors = {
      name: '',
      doB: '',
      startDate: '',
      department: ''
    };

    if (this.state.newStaff.name && name.length < 3)
      errors.name = "Tên nhân viên phải nhiều hơn 3 kí tự";
    
    let date = new Date();
    let stateDoB = new Date(this.state.newStaff.doB);
    let errorDoB = new Date(doB);
    if (date.getFullYear() - stateDoB.getFullYear() < 18 && date.getFullYear() - errorDoB.getFullYear() < 18)
      errors.doB = "Tuổi của nhân viên phải trên 18";
    
    if (this.state.newStaff.touched.department === "" || this.state.newStaff.touched.department === "choose")
      errors.department = "Chọn Phòng ban";
    
    return errors;
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
            <Form>
              <FormGroup row>
                <Label htmlFor="name" md={4}>Tên nhân viên:</Label>
                <Col md={8}>
                  <Input type="text" id="name" name="name"
                    placeholder="Tên nhân viên"
                    value={this.state.newStaff.name}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('name')}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>Ngày sinh:</Label>
                <Col md={8}>
                  <Input type="date" id="doB" name="doB"
                    value={this.state.newStaff.doB}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('doB')}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>Hệ số lương:</Label>
                <Col md={8}>
                  <Input type="text" id="salaryScale" name="salaryScale"
                    placeholder="Hệ số lương"
                    value={this.state.newStaff.salaryScale}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>Ngày vào công ty:</Label>
                <Col md={8}>
                  <Input type="date" id="startDate" name="startDate"
                    value={this.state.newStaff.startDate}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur('startDate')}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="department" md={4}>Phòng ban:</Label>
                <Col md={8}>
                  <Input type="select" id="department" name="department"
                    value={this.state.newStaff.department}
                    onChange={this.handleInputChange}>
                    <option>Sale</option>
                    <option>HR</option>
                    <option>Marketing</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>Số ngày nghỉ còn lại:</Label>
                <Col md={8}>
                  <Input type="text" id="annualLeave" name="annualLeave"
                    placeholder="Số ngày nghỉ còn lại"
                    value={this.state.newStaff.annualLeave}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>Số giờ đã làm thêm:</Label>
                <Col md={8}>
                  <Input type="text" id="overTime" name="overTime"
                    placeholder="Số giờ đã làm thêm"
                    value={this.state.newStaff.overTime}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salary" md={4}>Mức lương:</Label>
                <Col md={8}>
                  <Input type="text" id="salary" name="salary"
                    placeholder="Mức lương"
                    value={this.state.newStaff.salary}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.handleSubmit}>Thêm</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Hủy</Button>
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
    const staff = this.state.staffs.map(s => { return <StaffItem staff={s} key={s.id} /> });
    
    const errors = this.validate(this.state.newStaff.name, this.state.newStaff.doB);

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