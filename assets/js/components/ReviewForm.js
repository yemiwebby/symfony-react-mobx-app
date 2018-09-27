import React, { Component } from 'react';
import { inject } from "mobx-react";

@inject("reviews")
export default class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPosted: null,
            review: "",
            stars: ""
        };

        this.updateValue = this.updateValue.bind(this);
        this.submitReview = this.submitReview.bind(this);
    }

    updateValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitReview = (e) => {
        e.preventDefault();
        const review = this.state.review;
        const stars = Number(this.state.stars);
        this.props.reviews.addReview({review, stars});
        this.setState({isPosted: true, review: "", stars: ""});
    };

    render() {
        const { review, stars, isPosted } = this.state;
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
                                        <input type="text" name="review" value={review} onChange={this.updateValue} id="review" placeholder="Write a review" className="form-control" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <select name="stars" id="stars" className="form-control" value={stars} onChange={this.updateValue}>
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
                                        <button className="btn btn-success" type="submit"> SUBMIT YOUR REVIEW</button>
                                    </div>
                                    { isPosted && <div color="primary">
                                        Submitted ....
                                    </div>}
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
                </div>
            </div>
        )
    }
}