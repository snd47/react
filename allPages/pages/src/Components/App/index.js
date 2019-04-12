import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import Header from '../../Containers/Layout/header'
import Articles from '../../Pages/Articles'
import Home from '../../Pages/Home'
import ToDo from '../../Pages/ToDo'
import Recipes from '../../Pages/Recipes'
import { Switch, Route } from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <div className="App">
               <Header />
                <div className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/stocks" component={Articles} />
                            <Route path="/to-do-tasks" component={ToDo} />
                            <Route path="/recipe" component={Recipes} />
                        </Switch>
                </div>
            </div>
        );
    }
}

export default Index;
