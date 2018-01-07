import React from 'react';

export class InfoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        this.props.handleChange(e);
    }

    render(){
        return (
            <span>
                <label htmlFor={this.props.id}>{this.props.name}:</label>
                <input
                    name={this.props.id}
                    type={this.props.type}
                    onChange={this.handleInputChange}/>
            </span>
        );
    }
}