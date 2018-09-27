import React from 'react';
import ReviewsBoard from './ReviewsBoard';
import ReviewsList from './ReviewsList';
import StarRatingComponent from 'react-star-rating-component';


import { observer, inject } from "mobx-react";
import { decorate, observable, action, computed } from "mobx";
// import Review from '../Store/Store';
import stores from '../stores';

//
// decorate(Review, {
//     reviewList: observable,
//     addReview: action,
//     averageScore: computed,
//     reviewCount: computed,
//     fetchList: observable
// });

// const reviewStore = new Review();

const List = (props) => {
    return (
        <li className="list-group-item">
            <div className="float-left">{props.data.review}</div>
            <div className="float-right">
                <StarRatingComponent name="reviewRate" starCount={props.data.stars} />
            </div>
        </li>
    )
}


@inject("reviews")
@observer
class Admin extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <div style={{ marginTop: 70}}>
                    {/*<ReviewsBoard store={this.props}/>*/}
                    <ReviewsList store={this.props}/>
                </div>
            </div>
        )
    }
}

export default Admin;