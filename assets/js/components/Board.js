import React, { Component } from 'react';
import { observer } from "mobx-react"


class Board extends Component {
    render() {
        const { store } = this.props
        return (
            <div className="dashboardSection">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="card text-white bg-warning mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-comments fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p id="reviewCount">{store.reviewCount}</p>
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
                                        <p id="averageScores">{store.averageScore}</p>
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

Board = observer(Board);
export default Board;