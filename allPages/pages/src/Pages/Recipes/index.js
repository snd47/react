import React, {Component} from 'react'
// import {data} from '../../Containers/Recipes/data';
// import Menu from '../../Containers/Recipes/Menu';

import data from '../../Containers/Recipes2/data/data';
import Menu from '../../Containers/Recipes2/Menu';

class Recipes extends Component {

    render() {
        return (
            <div>
            <Menu item={data} title="Delicious Recipes" />
                {/* заменили recipes на item */}
            </div>
        );
    }
}

export default Recipes;