
import React, { Component } from 'react';
import Recipe from "./Recipe";

class Menu extends Component {

    render (){
        return (
            <article>

                    <h1>{this.props.title}</h1>

                <div className="recipes">
                    <Recipe />
                </div>
            </article>

        )
    }
}



export default Menu;
