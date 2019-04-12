import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Menu extends Component {
    render() {
        return (
             <Link to={this.props.link}><button>{this.props.name}</button></Link>
        );
    }
}


export default Menu
