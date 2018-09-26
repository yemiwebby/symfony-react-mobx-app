import React, { Component } from 'react';
import { observer } from "mobx-react";
import StarRatingComponent from 'react-star-rating-component';

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

class ReviewsList extends Component {
    render() {
        const { store } = this.props
        return (
            <div className="reviewsWrapper">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-comments"></i> &nbsp;&nbsp;&nbsp;Reviews
                            </div>
                            <ul className="list-group list-group-flush">
                                {store.reviewList.map((e, i) =>
                                    <List
                                        key={i}
                                        data={e}
                                    />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReviewsList = observer(ReviewsList);

export default ReviewsList;