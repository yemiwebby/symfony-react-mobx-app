import { action, computed } from 'mobx';


class Reviews {

    reviewList = [
        { review: "Absolutely wonderful - silky, sexy and comfortable", stars: 2 },
        { review: "This shirt is very flattering to all due to the adjustable front tie", stars: 4 },
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
    get starCount() {
        let total = 0;
        return this.reviewList.map(e => total = total + e.stars);
    }

    @computed
    get averageStarCount() {
        let avr = 0;
        this.reviewList.map(e => avr = avr + e.stars);
        return avr / this.reviewList.length
    }
}

export default new Reviews();