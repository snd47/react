import React, { Component } from 'react';
import './styles.css';
import Todo from '../../Containers/Todo/addTodoBlock/add'
import Check from '../../Containers/Tasks/check'
import TaskInput from '../../Containers/Tasks/TaskInput'


class ToDo extends Component {
    render() {
        return (
            <div>
                <Check />
                <div className="taskText"><Todo/></div>

            </div>
        );
    }
}

export default ToDo;