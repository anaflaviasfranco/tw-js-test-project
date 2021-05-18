module.exports = (dates) => {
    let weekdays = 0;
    let weekend = 0;

    dates.forEach(date => {
        let dateObj = new Date(date);
        if (dateObj.getDay() == 5 || dateObj.getDay() ==6){
            weekend += 1;
        } else {
            weekdays += 1;
        }
        
    });

    return {weekdays, weekend}
}