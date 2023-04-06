const tab = [-1, -3, 3, 23, 6, 0]

const bnPosNeg = (t: number[]) => {
    return [
        t.reduce((total, cur) => cur > 0 ? total + 1 : total, 0),
        t.reduce((total, cur) => cur < 0 ? total + 1 : total, 0),
    ]
}

console.log(bnPosNeg(tab))