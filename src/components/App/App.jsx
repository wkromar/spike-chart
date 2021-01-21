import { useState, useEffect } from 'react';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeTotal from '../EmployeeTotal/EmployeeTotal';
import {useDispatch} from 'react-redux'
import axios from 'axios';

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  // This functionality should be in a reducer!
  const addEmployee = (newEmployee) => {
    console.log(newEmployee);
    setEmployeeList([...employeeList, newEmployee]);
    
    employeeList.push(newEmployee);
    console.log(employeeList);
  };

  const dispatch = useDispatch();

   useEffect(() => {
    // fetchEmployees();
  }, [])

  
  // This functionality should be in a reducer!
  const deleteEmployee = (employeeToDelete) => {

    /*
    This is the callback used by .filter()
    It will be run for every employee in the list
    It returns true or false to filter
    If the id numbers match, it returns false, meaning remove this item from the array
    If the id numbers don't match, it returns true, meaning keep this item.
    */
    const matchEmployee = employee => employee.idNumber !== employeeToDelete.idNumber;

    /*
    .filter() is an array method
    It works much like .map()
    It will return a new array, based on the original.
    Items from the old array will be in the new array 
    if the matchEmployee function returns true

    Read More: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

    You will need this in your reducer, although some variables will change!
    */
    setEmployeeList(
      employeeList.filter(matchEmployee)
    );
  };

  return (
    <div>
      <section>
        <h2>Add Employee</h2>
        <EmployeeForm addEmployee={addEmployee} />
      </section>
      <section>
        <h2>Employees</h2>
        <EmployeeList employeeList={employeeList} deleteEmployee={deleteEmployee} />
        <EmployeeTotal employeeList={employeeList} />
      </section>
    </div>
  );
}

export default App;
