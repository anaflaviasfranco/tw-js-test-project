// const chai = require('chai');
// const expect = chai.expect; 
const booking = require('../src/quotation');

// describe('A failing test', function (){
//     it('should fail', function (){
//         expect(true).to.equal(false);
//     });
// })

describe('Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)', function() {
    it('Parque das Flores', function() {
        let hotel = booking(false, ['2020-03-16', '2020-03-17', '2020-03-18'])
        expect('Parque das Flores').to.equal(hotel);
    });
})

describe('Regular: 20Mar2020(mon), 21Mar2020(tues), 22Mar2020(wed)', function() {
    it('Jardim Botânico', function() {
        let hotel = booking(false, ['2020-03-20', '2020-03-21', '2020-03-22'])
        expect('Jardim Botânico').to.equal(hotel);
    });
})

describe('Fidelidade: 26Mar2020(mon), 27Mar2020(tues), 28Mar2020(wed)', function() {
    it('Mar Atlântico', function() {
        let hotel = booking(true, ['2020-03-26', '2020-03-27', '2020-03-28'])
        expect('Mar Atlântico').to.equal(hotel);
    });
})

