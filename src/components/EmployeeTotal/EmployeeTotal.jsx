function EmployeeTotal({ employeeList }) {

  const calculateMonthlyCost = employeeList => {
    /*
    This is the callback used by reduce
    It will be called for each thing in the array.
    Whatever it returns will be passed to the next call, in the `sum` variable
    When the reduce is complete, it passes the final sum to the reduce function.
    The sum of all the things is returned to who called reduce!
    */
    const employeeSalary = (sum, employee) => sum + Number(employee.annualSalary);

    /* 
    Reduce is an array method, like .map()
    .reduce() executes the callback function once for each element present in the array
    The 0 is the starting value -- every call to employeeSalary() increases that value
    by the employees annual salary.

    Learn more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    */
    const annualEmployeeCost = employeeList.reduce(employeeSalary, 0)

    return annualEmployeeCost / 12;
  }

  return (
    <p>Total Monthly Cost: {calculateMonthlyCost(employeeList)}</p>
  );
}

export default EmployeeTotal;
