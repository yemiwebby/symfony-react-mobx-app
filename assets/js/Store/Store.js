
class Store {
    reviewList = [
        { review: "This is a nice article", stars: 2 },
        { review: "A lovely review", stars: 4 },
    ]

    addReview(e) {
        this.reviewList.push(e);
    }

    get reviewCount() {
        let count = this.reviewList.length;
        return count;
    }

    get averageScore() {
        let avr = 0
        this.reviewList.map(e => avr = avr + e.stars)
        return avr / this.reviewList.length
    }
}

export default Store;