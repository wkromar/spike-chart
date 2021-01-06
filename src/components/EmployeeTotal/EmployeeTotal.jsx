import React from 'react';


/*
This is the callback used by reduce
It will be called for each thing in the array.
Whatever it returns will be passed to the next call, in the `sum` variable
When the reduce is complete, it passes the final sum to the reduce function.
The sum of all the things is returned to who called reduce!
*/
const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

/* 
Reduce is an array method, like .map
.reduce() executes the callback function once for each element present in the array
the 0 is the starting index
It returns one thing! 

Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
*/
const calculateMonthlyCost = employeeList => employeeList.reduce(employeeSalary, 0) / 12;

/* 
This is a functional component!
All it can do is receive props and render what it returns! 
No lifecycle methods, no `this`,  no local state!
If you want those things, you have to use a Class Component.

The employeeList is being passed on props. 
*/
const EmployeeTotal = (props) => (
  <p>Total Monthly Cost: {calculateMonthlyCost(props.employeeList)}</p>
);

export default EmployeeTotal;
