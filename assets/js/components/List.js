import React from 'react';
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
};

export default List;