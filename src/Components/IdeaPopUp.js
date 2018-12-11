import React, { Component } from 'react';


class IdeaPopUp extends Component {
   render() {
      return (
         <div>
            <h2>{this.props.ideaName}</h2>
            <p>{this.props.cost}</p>
            <p>{this.props.balance}</p>
            {this.props.contributors
            ?
               Object.entries(this.props.contributors).map(contributor => {
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
}

export default IdeaPopUp;