// const chai = require('chai')
// const expect = chai.expect 
const Hotel = require('../src/hotel');

describe('hotel', () => {
    if('it should have a name', () => {
        const hotel = new Hotel('Jardim Atlântico');
        expect(hotel.name).to.equal(3)
    });
    it('should have rating', () => {
        const hotel = new Hotel('Jardim Atlântico', 3);
        expect(hotel.rating).to.equal(3)
    });

    it('should have weekday regular price', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160);
        expect(hotel.weekdayRegular).to.equal(160)
    });
    it('should have weekend regular price', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60);
        expect(hotel.weekendRegular).to.equal(60)
    });

    it('should have weekday premium price', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60 , 110);
        expect(hotel.weekdayPremium).to.equal(110)
    });

    it('should have weekend premium price', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60, 110, 50);
        expect(hotel.weekendPremium).to.equal(50)
    });

    it('should return price for regular weekday', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60, 110, 50);
        expect(hotel.getPriceFor('regular', 5)).to.equal(160)
    });

    it('should return price for regular weekend', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60, 110, 50);
        expect(hotel.getPriceFor('regular', 0)).to.equal(60)
    });

    it('should return price for premium weekday', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60, 110, 50);
        expect(hotel.getPriceFor('premium', 4)).to.equal(110)
    });

    it('should return price for premium weekend', () => {
        const hotel = new Hotel('Jardim Atlântico', 3, 160, 60, 110, 50);
        expect(hotel.getPriceFor('premium', 6)).to.equal(50)
    });
})