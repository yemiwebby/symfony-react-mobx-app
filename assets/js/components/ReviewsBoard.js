import React, { Component } from 'react';


export default class ReviewsBoard extends Component {
    render() {
        const reviewStore = this.props.store.reviews;
        return (
            <div className="dashboardSection" style={{ marginTop: 70}}>
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="card text-white bg-warning mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-comments fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p id="reviewCount">{reviewStore.reviewCount}</p>
                                        <p className="announcement-text">Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="card text-white bg-secondary mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-star fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p id="reviewCount">{reviewStore.totalStarCount}</p>
                                        <p className="announcement-text">Total Star Count</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="card text-white bg-info mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-star fa-5x"></i>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p id="averageScores">{reviewStore.averageStarCount}</p>
                                        <p className="announcement-text"> Average Stars </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}