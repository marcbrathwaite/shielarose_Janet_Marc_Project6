import React, { Component } from 'react';


class Ideas extends Component {
    constructor() {
        super();
        this.state = {
            regIdeas: {}
        }
    }

    async componentDidMount() {
        const tempObj = await this.props.regObject
        this.setState({
            regIdeas: tempObj || {}
        })
    }

    render() {
        console.log(this.state.regIdeas);
        // console.log(Object.entries(this.props.regObject));
        // console.log('Render',this.props.regObject);
        return(
            <div>
                <ul>
                    {Object.entries(this.state.regIdeas).map(idea => {
                        return (
                            <li key={idea[0]}>
                                <p>{idea[1].idea}</p>
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
}

export default Ideas;