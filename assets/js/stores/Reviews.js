import { observable, action, computed } from 'mobx';


class Reviews {

    reviewList = [
        { review: "This is a nice article", stars: 2 },
        { review: "A lovely review", stars: 4 },
    ];

    @action
    addReview(e) {
        this.reviewList.push(e);
    }

    @computed
    get fetchList() {
        return this.reviewList;
    }

    @computed
    get reviewCount() {
        let count = this.reviewList.length;
        return count;
    }

    @computed
    get averageScore() {
        let avr = 0;
        this.reviewList.map(e => avr = avr + e.stars)
        return avr / this.reviewList.length
    }
}

export default new Reviews();