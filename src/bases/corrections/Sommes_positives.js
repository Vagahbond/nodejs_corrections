const list = [-1, 3, 2, -3, -4, 4, 2, 4, 5]


function positiveSum(l) {
    return l.filter(e => e > 0)
    .reduce((total, current) => total + current)
}

console.log(positiveSum(list))