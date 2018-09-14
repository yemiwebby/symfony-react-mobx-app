import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { decorate, observable, action, computed } from "mobx";
import '../css/app.css';
import Form from './components/Form';
import Board from './components/Board';
import Reviews from './components/Reviews';
import Store from './Store/Store';


decorate(Store, {
    reviewList: observable,
    addReview: action,
    averageScore: computed,
    reviewCount: computed
});

const reviewStore = new Store();


export default class App extends Component {
    render() {
        return (
            <div className={App}>
                <div>
                    <Form store={reviewStore}/>
                    <Board store={reviewStore}/>
                    <Reviews store={reviewStore}/>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));