import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'



const employeeListReducer = (state = [
  {idNumber: 1137,
    firstName:"Woody",
lastName: "Kromar",
jobTitle: 'dev',
annualSalary: 300000,

}
], action) =>{
   switch(action.type){
       case "ADD_NEW":
        return[...state, action.payload];
   case 'DELETE':return state.filter(employee => employee.idNumber !==action.payload)
   } return state;
}




const reduxStore = createStore(
  combineReducers({
    employeeListReducer
}),
  applyMiddleware(logger)
)
ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker;
