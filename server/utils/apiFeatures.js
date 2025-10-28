class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    filter() {
        return this.query;
    }

    sort() {
        return this.query;
    }

    paginate() {
        return this.query;
    }
}

module.exports = APIFeatures;
