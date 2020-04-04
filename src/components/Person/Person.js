import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

const Person = (props) => {
   // console.log(props)
   const {name, url, email, phone, anualSalary} = props.person;
   return (
      <div className="row" >
         <div className="card profile-card-5">
            <div className="card-img-block ">
               <img className="img-thumbnail" src={url} alt=""/>
            </div>
               <div className="card-body pt-0">
                  <div className="row">
                     <div className="col-md-8">
                        <h3><a href="#"> {name}</a></h3>
                        <h6><FontAwesomeIcon icon={faEnvelope} /> {email}</h6>
                        <h6><FontAwesomeIcon icon={faPhone} /> {phone}</h6>
                        <h6><FontAwesomeIcon icon={faMoneyBillAlt} />{anualSalary}</h6>
                     </div>
                     <div 
                        className="col-md-2"
                        onClick = {() => props.handleConnect(props.person)}
                        >
                        <a className="btn btn_xprofile"><FontAwesomeIcon icon={faPlusSquare} />Connect</a>
                     </div>
                     <div className="col-md-2">
                        <a className="btn btn_xprofile"><FontAwesomeIcon icon={faHeart} />Follow</a>
                     </div>
                  </div>
            </div>
         </div>

      </div>
   );
};

export default Person;