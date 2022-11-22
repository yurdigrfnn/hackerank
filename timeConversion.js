

function TimeConversion(num) { 
    let [hours, minutes, seconds] = num.split(':');
    let am = seconds.substring(2);
    console.log(am);
    if (am === 'PM') {
        hours = (hours === '12') ? hours : (parseInt(hours) + 12).toString();
    } else {
        hours = (hours === '12') ? '00' : hours;
    }
    

    return hours + ':' + minutes + ':' + seconds.substring(0,2);
         
}


module.exports = TimeConversion;