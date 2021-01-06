import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';

class App extends Component {
  state = {
    employeeList: [],
  };

  // This functionality should be in a reducer!
  addEmployee = (newEmployee) => {
    this.setState({
      employeeList: [...this.state.employeeList, newEmployee],
    });
  }

  // This functionality should be in a reducer!
  deleteEmployee = (employeeToDelete) => {

    /*
    This is the callback used by filter
    It will be run for every employee in the list
    It returns true or false to filter
    If the id numbers match, it returns false, meaning remove this item from the array
    If the id numbers dont match, it returns true, meaning keep this item.
    */
    const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;

    /*
    .filter is an array method
    It works much like .map
    It will return a new array, based on the original
    Items from the old array will be in the new array 
    if the matchEmployee function returns true

    Read More: 

    You will need this in your reducer, although some variables will change!
    */
    this.setState({
      employeeList: this.state.employeeList.filter(matchEmployee),
    });
  }

  render() {
    return (
      <div>
        <section>
          <h2>Add Employee</h2>
          <EmployeeForm addEmployee={this.addEmployee} />
        </section>
        <section>
          <h2>Employees</h2>
          <EmployeeList employeeList={this.state.employeeList} deleteEmployee={this.deleteEmployee} />
          <EmployeeTotal employeeList={this.state.employeeList} />
        </section>
      </div>
    );
  }
}

export default App;
