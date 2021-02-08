import {Line} from 'chart.js';
import {useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';

function EmployeeList() {

    const employeeList = useSelector(store => store.employeeListReducer)
    const employeeListReducer = employeeList[0];
    const dispatch = useDispatch();

    const deleteEmployee = (deleter) =>{
      console.log('deleting', deleter)
      dispatch({type: 'DELETE', payload: deleter.idNumber})
    }

    // creating chart with data. trying to use reducer data
    const chart = () =>{
      setChartData({
        labels: [employeeListReducer.firstName],
        datasets: [{
            label: 'Salaries',
            data:[employeeListReducer.annualSalary],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)'
            ],
            borderWidth: 4
        }]
      })
    }

    useEffect(() =>{
      chart()
    }, [])
  
   return (
    <div>
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
          {/* adding the chart to the list with reducer data. not working well. */}
        <Line data={employeeListReducer.annualSalary} options={{
          responsive: true,
          title: {text: 'Highest Grossing Employees', display: true},
          scales: {
            yAxes:[
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 10,
                  beginAtZero: true
                },
                gridLines:{
                  display: false
                }
              }
                  ]
          }
        }}
          />
     </div>
      
  );
}



export default EmployeeList;
