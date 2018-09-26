import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { decorate, observable, action, computed } from "mobx";
import '../css/app.css';
import ReviewForm from './components/ReviewForm';
import ReviewsBoard from './components/ReviewsBoard';
import ReviewsList from './components/ReviewsList';
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
                    <ReviewForm store={reviewStore}/>
                    <ReviewsBoard store={reviewStore}/>
                    <ReviewsList store={reviewStore}/>
                </div>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.getElementById('root'));