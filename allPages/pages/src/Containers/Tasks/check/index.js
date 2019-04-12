import React, { Component } from 'react';
import './styles.css';


class Check extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = { checked: true };
        this.handleCheck = this.handleCheck.bind(this)
    };


    handleCheck() {
        this.setState ({ checked: !this.state.checked })
    }

    render() {
        let message;
        if (this.state.checked) {
            message = "selected";
        } else {
            message = "unselected"
        }
        return (
            <div>
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
                <p>Checkbox  {message}</p>
            </div>
        )
    }
}

export default Check;