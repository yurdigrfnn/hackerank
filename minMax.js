
function miniMaxSum(arr) {
    let min = 0
    let max = 0
    let sortArr = arr.sort((a,b)=>a-b)
    let arrsplicemin = sortArr.slice(0,-1)
    let arrsplicemax = sortArr.slice(1,arr.length)
    for (let i = 0 ; i < arrsplicemin.length ; i++){
        min += arrsplicemin[i]
        
    }
    for (let j = 0 ; j < arrsplicemax.length ; j++){
        max += arrsplicemax[j]
    }
    
    return [min,max]
}


module.exports = miniMaxSum;