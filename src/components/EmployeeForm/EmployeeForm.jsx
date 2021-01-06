import { useState } from 'react';

function EmployeeForm({ addEmployee }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [annualSalary, setAnnualSalary] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addEmployee({
      firstName: firstName,
      lastName: lastName,
      idNumber: idNumber,
      jobTitle: jobTitle,
      annualSalary: annualSalary
    });

    clearEmployeeFields();
  };

  const clearEmployeeFields = () => {
    setFirstName('');
    setLastName('');
    setIdNumber('');
    setJobTitle('');
    setAnnualSalary('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        placeholder="First Name" 
        value={firstName} 
        onChange={(evt) => setFirstName(evt.target.value)} 
      />
      <input 
        placeholder="Last Name" 
        value={lastName} 
        onChange={(evt) => setLastName(evt.target.value)} 
      />
      <input 
        placeholder="ID Number" 
        value={idNumber} 
        onChange={(evt) => setIdNumber(evt.target.value)} 
      />
      <input 
        placeholder="Job Title" 
        value={jobTitle} 
        onChange={(evt) => setJobTitle(evt.target.value)}
      />
      <input 
        placeholder="Annual Salary" 
        value={annualSalary} 
        onChange={(evt) => setAnnualSalary(evt.target.value)} 
      />
      
      <input type="submit" value="Submit" />
    </form>
  );
}

export default EmployeeForm;
