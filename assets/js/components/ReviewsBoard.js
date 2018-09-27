import React, { Component } from 'react';


export default class ReviewsBoard extends Component {
    render() {
        const reviewStore = this.props.store;
        return (
            <div className="dashboardSection" style={{ marginTop: 70}}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="card text-white bg-warning mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-comments fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        {/*<p id="reviewCount">2</p>*/}
                                        <p id="reviewCount">{reviewStore.reviewCount}</p>
                                        <p className="announcement-text">Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card text-white bg-info mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-star fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        {/*<p id="averageScores">40</p>*/}
                                        <p id="averageScores">{reviewStore.averageScore}</p>
                                        <p className="announcement-text"> Average Scores </p>
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