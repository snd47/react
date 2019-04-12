import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'
import Image from './Image'

const Recipe = ({ name, pic, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, '-')}>
        <h1>{name}</h1>
        {/*<div>*/}
            {/*<img src = {pic} />*/}
        {/*</div>*/}
       <Image img={pic} />
        <IngredientsList list={ingredients} />
        <Instructions title="Cooking Instructions"
                      steps={steps} />
    </section>

Recipe.displayName = 'Recipe'

export default Recipe