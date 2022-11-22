


function fizBuzz(number){
    if(number % 3 === 0 && number % 5 === 0){
        return 'fizbuz';
    } else if(number % 3 === 0){
        return 'fiz';
    } else if(number % 5 === 0){
        return 'buz';
    } else {
        return number;
    }

}

module.exports = fizBuzz;