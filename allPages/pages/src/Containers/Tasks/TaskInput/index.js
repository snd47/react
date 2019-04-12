import React, { Component } from 'react';
import './styles.css';


class TaskInput extends Component {
    render() {
        return (
            <div className="box">
                <form>
                    <input type="text" />
                </form>
            </div>
        );
    }
}

export default TaskInput;