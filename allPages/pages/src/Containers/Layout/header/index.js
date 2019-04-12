import React, { Component } from 'react';
import './styles.css';
import Menu from '../../../Containers/Layout/menu'


class Header extends Component {
    render() {
        return (
            <header>
                <div className="top-menu">
                    <Menu name="Dom" link="/" /> {/*store*/}
                    <Menu name="Stocks" link="/stocks"/>
                    <Menu name="Tasks" link="/to-do-tasks"/>
                    <Menu name="Recipe" link="/recipe"/>
                </div>
            </header>
        );
    }
}

export default Header;