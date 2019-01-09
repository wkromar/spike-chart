import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    let employeeList = this.props.employeeList

    return (
      <ul>
        {employeeList.map(employee => (
          <li key={employee.idNumber}>
            {`${employee.firstName}
            ${employee.lastName}
            is the ${employee.jobTitle}
            and makes ${employee.annualSalary}`}
            <button onClick={() => deleteEmployee(employee)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}


export default EmployeeList;
