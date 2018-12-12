import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


//This component displays the popup which shows after clicking an idea
const IdeaPopUp = ({
      ideaName,
      cost,
      balance,
      contributors,
      ideaPopUp,
      handleClickIdea
   }) => {
   return (
         <div>
            <div className={`${ideaPopUp ? "ideaPopUpVisible" : "ideaPopUpNotVisible"} ideaPopUpBg`} onClick={handleClickIdea}></div>
            <div className="ideaPopUp">
               <div className="ideaPopUpContent">
                  <FontAwesomeIcon icon={faTimes} onClick={handleClickIdea} className="closeIcon" aria-hidden title="Close trip description"></FontAwesomeIcon>
                  <span className="visuallyhidden">Close trip description</span>
                  <h2>{ideaName}</h2>
                  <p className="info"><span>Total Cost:</span> ${cost}</p>
                  <p className="info"><span>Current Balance:</span> ${balance}</p>
         
                  <div className="contributorContainer">
                     {contributors ?
                        Object.entries(contributors).map(contributor => {
                        return (
                           <p className="contributor"><span>{contributor[1].firstName} {contributor[1].lastName}</span> gifted <span>${contributor[1].contributionAmount}</span></p>
                        )
                        })
                     :
                        <div>
                           <p className="noContributors">You currently have no contributors </p> 
                           <svg x="0px" y="0px" viewBox="0 0 85 85"><path d="M50,20c16.569,0,30,13.431,30,30S66.569,80,50,80S20,66.569,20,50S33.431,20,50,20 M50,15  c-19.299,0-35,15.701-35,35s15.701,35,35,35s35-15.701,35-35S69.299,15,50,15L50,15z" /><circle cx="62" cy="43.999" r="5" /><circle cx="38.002" cy="43.999" r="5" /><path d="M65.414,66.827c-0.588,0-1.178-0.206-1.653-0.626c-3.802-3.355-8.688-5.204-13.761-5.204s-9.959,1.849-13.761,5.204  c-1.035,0.914-2.615,0.814-3.528-0.22c-0.914-1.035-0.815-2.614,0.22-3.528C37.646,58.29,43.708,55.997,50,55.997  c6.292,0,12.354,2.293,17.069,6.456c1.035,0.914,1.134,2.493,0.22,3.528C66.795,66.541,66.106,66.827,65.414,66.827z" />
                           {/* Created by Daouna Jeong from the Noun Project */}
                           </svg>
                        </div>
                     }
                  </div>
               </div>
            </div>
         </div>
      )
}

export default IdeaPopUp;