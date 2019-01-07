# Redux Employee Salary Conversion

Our employee salary calculator is still pretty small and might not need redux yet, but we know our app is going to grow and grow, so we're going to add redux before things get out of hand. Setting up Redux is time consuming, but it's worth it!

## Setup
1. Fork this repo
2. `npm install`
3. `npm start`

## Base Mode 
Let's add some Redux!
### Setup
1. Get `redux` and `react-redux` installed
2. Set up your store, and `Provider`

Next, think about this goal:

Your assignment is to move the `employeeList` array from local state into a redux state. 

Existing `addEmployee` and `deleteEmployee` functionality in `App.js` will need to be removed from `App` and moved & edited so that they work with the `employeList` reducer.  

Fire off those reducers by dispatching the `'ADD_EMPLOYEE'` and `'DELETE_EMPLOYEE'` actions.


### Implement Redux
1. Make a reducer to handle the state of the employee list 
2. `Connect` App.js with redux, both dispatch and/or mapStateToProps
3. App.js will  `dispatch` appropriate actions for button clicks. 
4. The reducer will need to listen for those actions and appropriately change the data
5. Pass the appropriate data to subcomponents

### Implement Better Redux
Now that we've got redux in here, its looking a little silly. We're still passing down props! Let's refactor our code so that our components talk directly with redux as opposed to their parent component. 

Think about this goal:
Don't pass props down to subcomponents. Instead, have the subcomponents reach out to redux directly.

1. Connect EmployeeList
2. Remove props passed to Employee List
3. mapStateToProps in EmployeeList and access correct data
4. Repeat for EmployeeForm
5. Repeat for EmployeeTotal -- NOTE: connecting a functional component is the same, just make sure the props are named correctly


## Stretch Goals

Style it up w/ Material UI!  Things you might try:

- [Button](https://material-ui.com/demos/buttons/)
- [List](https://material-ui.com/demos/lists/) or [Tables](https://material-ui.com/demos/tables/)
- [Icons](https://material-ui.com/style/icons/)
- [Typography](https://material-ui.com/style/typography/)
- [Snackbars](https://material-ui.com/demos/snackbars/) - Cool for alerts! 
- [Themes](https://material-ui.com/customization/themes/)

Move your reducers:

1. Create a `redux` folder inside of the `src` folder
2. Create a `reducers` folder inside your `redux` folder
3. Create an `employee.reducer.js` file inside of the `reducers` folder
4. Move your reducer into this file, and then export it. Import it where you were using it.




