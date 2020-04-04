import React from 'react';
import './Profile.css';

const Profile = () => {
   return (
      <div>
         <div className="profile_card">
            <div class="card">
               <img src="https://i.picsum.photos/id/64/4326/2884.jpg" alt=""/>
               <div class="card-body">
                  <div className="bio card_section">
                     <h4>Jonathon Doe</h4>
                     <h5 class="card-title">Front End Developer</h5>
                     <h6>Bio</h6>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
                  <div className="skill card_section">
                     <h6>Skills</h6>
                     <ul>
                        <li>Html5</li>
                        <li>CSS3</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>React</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Profile;