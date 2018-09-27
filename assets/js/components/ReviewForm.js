import React, { Component } from 'react';
import { decorate, observable, action, computed } from "mobx";
import { observer, inject } from "mobx-react";
import ReviewsList from "./ReviewsList"
// import Review from '../Store/Store';

import stores from '../stores';


// decorate(Store, {
//     reviewList: observable,
//     addReview: action,
//     averageScore: computed,
//     reviewCount: computed,
//     fetchList: observable
// });

@inject("reviews")
class ReviewForm extends Component {

    submitReview = (e) => {
        e.preventDefault();
        const review = this.review.value;
        const stars = Number(this.stars.value);
        this.props.reviews.addReview({review, stars})
        // stores.reviews.addReview({review, stars});
        // reviewStore.addReview({review, stars});
        console.log(stores.reviews.reviewList);
        // this.props.store.addReview({ review, stars })
    }

    render() {
        return (
            <div className={"container"}>
                <div className="formSection" style={{ marginTop: 70}}>
                    <form onSubmit={this.submitReview}>
                        <div className="row">
                            <div className={"col-md-6"}>

                                <div className="form-group text-center">
                                    <h3>What do you think ?</h3>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        {/*<input type="text" name="review" id="review" placeholder="Write a review" className="form-control" />*/}
                                        <input type="text" name="review" ref={node => { this.review = node; }} id="review" placeholder="Write a review" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        {/*<select name="stars" id="stars" className="form-control">*/}
                                        <select name="stars" id="stars" className="form-control" ref={node => { this.stars = node; }}>
                                            <option value="1">1 Star</option>
                                            <option value="2">2 Star</option>
                                            <option value="3">3 Star</option>
                                            <option value="4">4 Star</option>
                                            <option value="5">5 Star</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button className="btn btn-success" type="submit"> SUBMIT REVIEW</button>
                                    </div>
                                </div>
                            </div>

                            <div className={"col-md-6"}>
                                <div className="card mb-3">
                                    <img className="card-img-top" src="https://res.cloudinary.com/yemiwebby-com-ng/image/upload/v1537862833/symfony-listing/belt-casual-clothes.jpg" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Sample Post</h5>
                                        <p className="card-text">
                                            This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                    {/*<ReviewsList store={reviewStore}/>*/}

                </div>
            </div>
        )
    }
}

// ReviewForm = observer(ReviewForm);
export default ReviewForm;