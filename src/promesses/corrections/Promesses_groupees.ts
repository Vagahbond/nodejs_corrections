const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const promises: Promise<number>[] = tab.map(async (i) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(i)
        }, i * 1000)
    })
})

Promise.all(promises).then((res) => {
    console.log(res)
})