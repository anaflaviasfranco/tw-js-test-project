class Hotel {
    constructor(name, rating, weekdayRegular, weekendRegular, weekdayPremium, weekendPremium){
        this.name = name;
        this.rating = rating;
        this.weekdayRegular = weekdayRegular;
        this.weekendRegular = weekendRegular;
        this.weekdayPremium = weekdayPremium;
        this.weekendPremium = weekendPremium;

    }
    getPriceFor(customerType, dayOfWeek) {
        if(this.isWeekday(dayOfWeek)) {
            if(customerType === 'regular') return this.weekdayRegular
            return this.weekdayPremium
        } 
        if (customerType === 'regular') return this.weekendRegular
        return this.weekendPremium
    }

    isWeekday(dayOfWeek) {
        return dayOfWeek > 0 && dayOfWeek < 6
    }
}
module.exports = Hotel