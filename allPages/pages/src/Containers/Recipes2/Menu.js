import React from 'react'
import Recipe from './Recipe'
// import '../../stylesheets/Menu.css'

const Menu = ({ item }) =>
 // заменили recipes на item
    <article>
        <header>
            <h1>Delicious Recipes</h1>
        </header>
        <div className="recipes">
            { item.map((recipe, i) =>
                <Recipe key={i} {...recipe} />)
            }
        </div>
    </article>

Menu.displayName = 'Menu'

export default Menu