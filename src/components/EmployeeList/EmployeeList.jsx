
import {useDispatch, useSelector} from 'react-redux';

function EmployeeList() {

    const employeeList = useSelector(store => store.employeeListReducer)

    const dispatch = useDispatch();

    const deleteEmployee = (deleter) =>{
      console.log('deleting', deleter)
      dispatch({type: 'DELETE', payload: deleter.idNumber})
    }


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


export default EmployeeList;
