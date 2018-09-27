import React from 'react';
import ReviewsBoard from './ReviewsBoard';
import ReviewsList from './ReviewsList';
import { observer, inject } from "mobx-react";

@inject("reviews")
@observer
class Admin extends React.Component {
    render() {
        return(
            <div className={"container"}>
                <div style={{ marginTop: 70}}>
                    <ReviewsBoard store={this.props}/>
                    <ReviewsList store={this.props}/>
                </div>
            </div>
        )
    }
}

export default Admin;