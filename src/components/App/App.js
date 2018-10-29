import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';

class App extends Component {
  state = {
    employeeList: [],
  };

  addEmployee = (newEmployee) => {
    this.setState({
      employeeList: [...this.state.employeeList, newEmployee],
    });
  }

  deleteEmployee = (employeeToDelete) => {
    const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;

    this.setState({
      employeeList: this.state.employeeList.filter(matchEmployee),
    });
  }

  render() {
    return (
      <div>
        <EmployeeForm addEmployee={this.addEmployee} />
        <EmployeeList employeeList={this.state.employeeList} deleteEmployee={this.deleteEmployee} />
        <EmployeeTotal employeeList={this.state.employeeList} />
      </div>
    );
  }
}

export default App;
