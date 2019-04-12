import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListCountInfo from '../listcount/index';
import Edit from '../edit/index';
//import Delete from "../delete/delete";

class Todo extends Component {

    constructor (props){
        super ();

        this.state = {
            tasks: []
        }

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){
        if (this.nameTextInput !== null) {
            this.setState({
                tasks: this.state.tasks.concat(this.nameTextInput.value)

            });
        }
    }
    componentDidMount (){
        ReactDOM.findDOMNode(this.nameTextInput).focus();
    }
    componentDidUpdate (){
        this.nameTextInput.value = '';
        ReactDOM.findDOMNode(this.nameTextInput).focus();
    }
    render (){
        let tasks = this.state.tasks.map(task => {
            return <li>{task}{<Edit />}</li>;
        });
        return (
            <div className="content">
                <div className="row">
                    <div className="inp">
                        <br />
                        <input type="text" placeholder="Enter a new task" ref={(ref) => this.nameTextInput = ref} className="form-control" />
                    </div>
                    <div className="btn">
                        <br />
                        <button type="button" className="btn btn-success" onClick={this.handleClick}>Add</button>
                    </div>
                    <br />

                    <div className="row">
                        <div className="txt">

                            <ul>{tasks}</ul>

                        </div>
                    </div>
                    <br />
                    <ListCountInfo count={this.state.tasks.length} />
                </div>
            </div>
        );
    }
}


export default Todo;
