import React, { Component } from 'react';


class GuestPage extends Component {
    constructor() {
        super();
        this.state = {
            regInfo: {},
            ideas: {}
        }
    }
    
    componentDidMount() {
        const registryId = this.props.match.params.registry_id //registryId now available in params
        regRef.on('value', (snapshot) => {
            this.setState({
                regInfo: snapshot.val()[registryId] || {}, //saved snapshot in regInfo 
            }, () => {
                this.setState({
                    ideas: this.state.regInfo.Ideas || {}
                })
            })
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.regInfo.name}</h1> 
                <p>{this.state.regInfo.date}</p>
                {/* able to print custom info on page */}

                <div className="ideas">
                    {Object.entries(this.state.ideas).map(idea => {
                        return(
                            <button key={idea[0]} className="idea">{idea[1].ideaName}</button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default GuestPage;