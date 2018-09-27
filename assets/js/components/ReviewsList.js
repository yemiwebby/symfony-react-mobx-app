import React, { Component } from 'react';
import List from './List';

export default class ReviewsList extends Component {
    render() {
        const reviewStore = this.props.store.reviews;
        return (
            <div style={{ marginTop: 50 }}>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-comments"></i> &nbsp;&nbsp;&nbsp;Reviews
                            </div>
                            <ul className="list-group list-group-flush">
                                {reviewStore.fetchList.map((e, i) =>
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