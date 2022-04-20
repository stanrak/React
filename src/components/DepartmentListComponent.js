import React from 'react';
import DepartmentItem from './DepartmentItem';

const DepartmentList = (props) => {
  const department = props.departments.map(d => {return <DepartmentItem key={d.id} department={d} />});

  return (
    <div className='container'>
      <div className='row m-3'>
        <h2>Danh sách Phòng ban</h2>
      </div>
      <div className="row m-3">
        {department}
      </div>
    </div>
  );
}

export default DepartmentList;