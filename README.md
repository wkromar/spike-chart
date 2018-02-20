# Redux Employee Salary Conversion

Our employee salary calculator is still pretty small and might not need redux yet, but we know our app is going to grow and grow, so we're going to add redux before things get out of hand.

1. Fork this repo
1. `npm install`
1. `npm start`

Let's add Redux!

1. Create a `redux` folder inside of the `src` folder
1. Create an `action.js` file inside of the `redux` folder
1. Create a `reducers` folder 
1. Create an `index.js` file and `employee.reducer.js` file inside of the `reducers` folder

Your assignment is to move the `employeeList` array, `addEmployee` function, and `deleteEmployee` function out of the `App.js` and into the reducers. Fire off those functions by dispatching the `'ADD_EMPLOYEE'` and `'DELETE_EMPLOYEE'` actions.