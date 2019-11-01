import React from 'react';

class Card extends React.Component{
    constructor(){
        super();
        this.state={
            data: {},
            key:0
        }
    }

    componentDidMount=()=>{
        this.setState({
            data: this.props.player,
            key:this.props.key
        })

    }

    render(){
        return(
            <div className="card" key={this.state.key}>
                <h2>Name:{this.state.data.name}</h2>
                <p>Country:{this.state.data.country}</p>
                <p>Searches:{this.state.data.searches}</p>
            </div>
        );
    }
}

export default Card;
