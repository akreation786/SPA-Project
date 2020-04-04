import React from 'react';
import './Summary.css'

const Summary = (props) => {
   const summary = props.summary;
   console.log(props);
   // const totalRequest = summary.reduce((total, prsn) => total + prsn.price, 0);
   const totalSalary = summary.reduce( (totalSalary, prsn)=>(totalSalary+prsn.anualSalary),0);
   console.log(totalSalary);
   return (
      <div className="summary">
         <h3>Friends Summary: {summary.length}</h3>
         <h4> Total Anual Salary: {totalSalary}</h4>
      </div>
   );
};

export default Summary;