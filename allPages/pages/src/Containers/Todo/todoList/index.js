import React, {Component} from 'react';

class tasks extends Component {
    render() {

        this.state.tasks.map(task => {
            return <li>{task}{<Edit/>}</li>;
        })
    }
};

export default tasks;
