import React, { Component } from 'react';


class ListCountInfo extends Component {
    render (){
        if (this.props.count === 0){
            return (
                <div className="row">
                    <div className="txt">
                        <p>Your list is empty. Why not add some names?</p>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className="row">
                    <div className="col-md-4 col-md-offset-2">
                        <p>There are {this.props.count} names on the list</p>
                    </div>
                </div>
            );
        }
    }
}



export default ListCountInfo;
