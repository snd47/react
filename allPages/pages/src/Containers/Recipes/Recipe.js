
import React, { Component } from 'react';
import {data} from "./data";
import Steps from "./steps";


class Recipe extends Component {
    // constructor() {
    //     super();
    //     this.state = data;
    // };

    render (){
        return (
            <div>
                <div className="content">
                    {
                        data.map((item, index) => (
                            <div key={index}>
                                <div  className="symb">  {item.name}</div>

                                <div  className="price">
                                    <ul className="ingredients">
                                    {item.ingredients.map((ingredient, i) =>
                                        <li key={i}>{ingredient.name}</li>
                                        )}
                                    </ul>
                                    <div ><img src={item.pic} /></div>
                                </div>
                                <p className="priceLabel">Steps: </p>

                                { item.steps.map((step, i) =>
                                    <p key={i}>{i+1}. {step} </p>
                                )}



                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}



export default Recipe;