const getHotelData = require('../api/hotel-service');
const countDays = require('./count-days');

module.exports = (premium, dates) => {
    let hotelData = getHotelData();
    let days = countDays(dates);
    let cheaperHotel = hotelData
    .map(hotel => {
        return {
            "name": hotel.name,
            "rating": hotel.rating,
            "finalPrice": premium ? 
            hotel.weekDayPremium * days.weekdays + hotel.weekendPremium * days.weekend :
            hotel.weekDayRegular * days.weekdays + hotel.weekendRegular * days.weekend
        };
    }).sort((a,b) => {
        return a.finalPrice - b.finalPrice || b.rating - a.rating
    }).shift().name;

    return cheaperHotel;
}

// booking(true, ['2021-05-09', '2021-05-08', '2021-05-07']);