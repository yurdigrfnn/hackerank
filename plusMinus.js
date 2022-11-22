
function plusMinus(arr) {
    // expect output to 0.400000,0.400000,0.200000
    let positive = 0;
    let negative = 0;
    let zero = 0;
    let total = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    let positiveRatio = positive / total;
    let negativeRatio = negative / total;
    let zeroRatio = zero / total;

    return positiveRatio.toFixed(6) + "," + negativeRatio.toFixed(6) + "," + zeroRatio.toFixed(6);

}

module.exports = plusMinus;





