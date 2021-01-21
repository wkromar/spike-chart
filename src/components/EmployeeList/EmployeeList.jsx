import {useSelector} from 'react-redux'

function EmployeeList(){
  const employeeList = useSelector(store => store.employeeListReducer)

  return(
    <section>
      <h2>List of Employees</h2>
      <ul>
        {employeeList.map((employee, idNumber) => 
        <li key={idNumber}>{employee.firstName} {employee.lastName} is the {employee.jobTitle} and makes {employee.annualSalary}</li>)}
      </ul>
    </section>

  )
}export default EmployeeList;


// function EmployeeList({ employeeList, deleteEmployee }) {
//   return (
//     <ul>
//       {employeeList.map(employee => (
//         <li key={employee.idNumber}>
//           {`${employee.firstName}
//           ${employee.lastName}
//           is the ${employee.jobTitle}
//           and makes ${employee.annualSalary}`}
//           <button onClick={() => deleteEmployee(employee)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }


// export default EmployeeList;
