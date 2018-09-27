import { action, computed } from 'mobx';


class Reviews {

    reviewList = [
        { review: "Absolutely wonderful - silky, sexy and comfortable", stars: 2 }
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
        return this.reviewList.length;
    }

    @computed
    get totalStarCount() {
        let total = 0;
        this.reviewList.map(e => total = total + e.stars);
        return total;
    }

    @computed
    get averageStarCount() {
        let avr = 0;
        this.reviewList.map(e => avr = avr + e.stars);
        return avr / this.reviewList.length
    }
}

export default new Reviews();