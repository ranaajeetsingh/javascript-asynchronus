const onFulfillment = (result) => {
    // resolve was called
    console.log(result)
    console.log('Set up the table to eat tacos')
}

const onRejection = (error) => {
    // reject was called
    console.log(error)
    console.log('Start cooking pasta')
}

const promise1 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        resolve('bringing tacos')
    }, 5000)
})

const promise2 = new Promise( (resolve,reject) => {
    setTimeout( () => {
        reject('not bringing tacos')
    }, 5000)
})

promise1.then(onFulfillment).catch(onRejection)
promise2.then(onFulfillment).catch(onRejection)

