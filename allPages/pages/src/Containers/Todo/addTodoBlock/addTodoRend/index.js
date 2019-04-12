// const addTodoRend = () => ( <h2> Hello World </h2> );
//
// export default HelloWorldText;
import React from 'react';
import ListCountInfo from '../../listcount/index';

const addTodoRend = () =>
    (
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

                    <ul>{this.state.tasks}</ul>

                </div>
            </div>
            <br />
            <ListCountInfo count={this.state.tasks.length} />
        </div>
    );

export default addTodoRend;



