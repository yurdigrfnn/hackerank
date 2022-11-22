
function staircase(n) {
    for(let i = 1 ; i <= n ; i++){
        return ' '.repeat(n - [i])+ '#'.repeat([i])
    }
}

module.exports = staircase;