import React, { Component } from 'react';
import TaskList from "../TaskList";

class TaskList extends Component {
    let RendNorm = TaskList.prototype.RendNorm;

    RendNorm() {
    return (
        <div className="box">
            <div className="text"  ref={this.textInput} >{this.props.children}</div>
            <button onClick={e => this.setState({'edit' : true }) } className="btn Edit">Edit</button>
            <button onClick={e => this.setState({'edit' : true }) } className="btn Delete">Delete</button>
        </div>
    )
}
};

export default TaskList.prototype.RendNorm();
