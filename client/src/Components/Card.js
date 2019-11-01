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

    componentDidUpdate =()=>{

    }

    render(){
        return(
            <div key={this.state.key}>
                <h1>Name:{this.state.data.name}</h1>
                <p>Country:{this.state.data.country}</p>
                <p>Searches:{this.state.data.searches}</p>
            </div>
        );
    }
}

export default Card;
