
function birthdayCakeCandles(candles) {
    const max = candles.reduce((a, b) => Math.max(a, b), -Infinity);
    let r = 0
    for( let i = 0 ; i < candles.length ; i++){
        if(candles[i] === max){
            r++
        }
    }
    return r
}


module.exports = birthdayCakeCandles;