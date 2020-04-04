import React, { useState, Profiler } from 'react';
import personData from '../../fakeData';
import './Friends.css';
import Person from '../Person/Person';
import Summary from '../Summary/Summary';
import Profile from '../Profile/Profile'

const Friends = () => {
   const first15 = personData.slice(0, 15);
   const [persons, setPerson] = useState(first15);
   const [summary, setSummary] = useState([]);

   const handleConnect = (person) =>{
      const newAddSummary = [...summary, person];
      setSummary(newAddSummary);
   }

   return (
      <div className="container-flued">
         <div className="row body_heading">
            <div className="col-md-3">
               <h3>Profile</h3>
            </div>
            <div className="col-md-6">
               <h3>Friend Suggestion</h3>
            </div>
            <div className="col-md-3">
               <h3>Friends Summary</h3>
            </div>
         </div>
         <div className="row">
            <div className="col-md-3">
               <Profile></Profile>
            </div>
            <div className="col-md-6">
               {
                  persons.map(personinfo => <Person handleConnect={handleConnect} person = {personinfo} ></Person>)
               }
            </div>
            <div className="col-md-3">
               <Summary summary={summary}></Summary>
            </div>
         </div>
      </div>
   );
};

export default Friends;