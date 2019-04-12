import React, { Component } from 'react';
import './styles.css';


class TaskList extends Component {
    constructor() {
        super();
        this.state = { edit: false };
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    };

    rendNorm() {
        return (
            <div className="box">
                <div className="text"  ref={this.textInput} >{this.props.children}</div>
                <button onClick={e => this.setState({'edit' : true }) } className="btn Edit">Edit</button>
                <button onClick={e => this.setState({'edit' : true }) } className="btn Delete">Delete</button>
            </div>
        )
    }

    rendEdit() {

        return (
            <div className="box">
                <textarea ref= {this.textInput} defaultValue={this.props.children}></textarea>
                <button  onClick={() => {
                    this.setState({'edit' : false });
                    this.focusTextInput() ;
                }}
                className="btn Save">Save</button>

            </div>
        )
    }
    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    // componentDidMount() {
    //     this.textInput.current.focusTextInput();
    // }

    render() {
    if (this.state.edit) {
            return this.rendEdit ();
        }
        else {
            return this.rendNorm ();
        }
    }

}

export default TaskList;
