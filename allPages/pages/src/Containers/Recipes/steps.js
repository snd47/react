import React, {Component} from 'react';
import {data} from "./data";


class Steps extends Component {
    constructor() {
        super();
        this.props =
            data.steps;
    };
    render (){
        return (
                <section className="instructions">
                    { this.props.map((step, i) =>
                        <p key={i}>{i+1}. {step} </p>
                    )}
                </section>

        )
    }
}



export default Steps;