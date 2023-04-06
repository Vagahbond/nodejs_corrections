const shortPromise = new Promise<string>((resolve, reject): void => {
    setTimeout(() => {
      resolve('short')
    }, 100)
  })
  
  const longPromise = new Promise<string>((resolve, reject): void => {
    setTimeout(() => {
      resolve('long')
    }, 1000)
  })
  
  const execPromises = async (): Promise<void> => {
    longPromise
      .then(async (longResult) => {
        console.log(longResult)
        console.log(await shortPromise)
      })
      .catch((error) => {
        console.log('longPromise', error)
      })
  }
  
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  execPromises()
  