import React from 'react';

//This component displays the popup which shows after clicking an idea
const IdeaPopUp = ({
      ideaName,
      cost,
      balance,
      contributors
   }) => {
   return (
         <div>
            <h2>{ideaName}</h2>
            <p>{cost}</p>
            <p>{balance}</p>
            {contributors ?
               Object.entries(contributors).map(contributor => {
               return (
                  <p className="contributor">{contributor[1].firstName} {contributor[1].lastName} gifted {contributor[1].contributionAmount}</p>
               )
            })
         :
         null
         }
         </div>
      )
}

export default IdeaPopUp;