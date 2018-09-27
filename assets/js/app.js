import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, NavLink, Route, Switch, Link, Router } from 'react-router-dom';
import ReviewForm from './components/ReviewForm';
import ReviewsBoard from './components/ReviewsBoard';
import Admin from './components/Admin';
import ReviewsList from './components/ReviewsList';
import Dashboard from './components/Sample';
import Another from './components/Another';
import { Provider } from 'mobx-react';
import stores from "./stores";


class App extends Component {
    render() {
        return (
            <Provider reviews={stores.reviews}>
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a href="#" className="navbar-brand"> Symfony React Application State MobX </a>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/"}> Post </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link"} to={"/admin-page"}> Admin Page </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route path={"/admin-page"} component={Admin} />
                        <Route path={"/"} component={ReviewForm} />
                    </Switch>
                </div>
            </BrowserRouter>
            </Provider>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));