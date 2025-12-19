# Promises

### Promise in layman terms - Dinner Scenario

1. Consider a scenario where you and your roommate want to have dinner at home.
2. At the same time, you feel like having tacos from the food truck nearby
3. You ask your roommate, "hey can you go down to the food truck and get us some tacos?"
4. When he is about to leave, you tell him
   1. "There is no point in me waiting till you're back to prepare the soup. So I'll start with the soup now but when you reach the place, can you promise that you'll text me so I can start setting up the dinning table?"
   2. "Also let me know if something goes wrong. If you can't find the food truck or if they are out of tacos for the night. Let me know that you can't get the tacos and I'll start cooking some pasta instead"
5. You friend says "Sure, I promise. I'll head out now and text you in some time."
6. Now, you go about preparing your soup but the status on tacos? We can say that it is currently pending till you receive that message from your friend.
7. When you get back a text message saying that he is getting the tacos, you desire to eat tacos has been fulfilled. You can then proceed to set up the table.
8. If the text message says that he can't bring back any tacos, you desire to have tacos have been rejected and you now to cook some pasta instead.

| Dinner Scenario | JavaScript
| -- | -
| Your friend | Promise
| can/can't get tacos | Promise value
| Can get tacos | Promise Fulfilled
| Cannot get tacos | Promise rejected
| Set up the table | Success callback
| Cook pasta | Failure callback

## Promise

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

| Definiton | Example
| -- | -
| A promise is a proxy for a value | Can or can't get tacos
| Not necessarily known when the promise is created | You don't know if he can/can't get tacos when he made his promise
| Allows you to associate handlers with an asynchronous action's eventaul success value or failure reason | Decide ahead of time what has to be done when the promise is eventually fulfilled or rejected. That is, either setting up the table or cooking pasta

## What?

A promise is simply an object in JavaScript

A promise is always in one of the three states:
1. pending: which is initial state, neither fulfilled nor rejected.
2. fulfilled: meaning that the operation completed successfully
3. rejected: meaning that the operation failed

## Why?

Promises help us deal with asynchronous code in a far more simpler way compared to callbacks

Callback hell can be avoided with Promises

## How to work with Promises?

1. How to create a Promise?
2. How to fulfill or reject the Promise?
3. How to execute callback functions based on whether the promise is fulfilled or rejected?

### How to create a Promise?

```JavaScript
const promise = new Promise()
```

### How to fulfill or reject the promise?

```JavaScript
const promise = new Promise( (resolve,reject) => {

})
```

#### Resolve Scenario
 
```JavaScript 
const promise = new Promise((resolve,reject) => {
    // Change status from 'pending' to 'fulfilled'
    resolve()
})
```
```JavaScript 
const promise = new Promise( (resolve,reject) => {
    setTimeout(()=> {
        // Food truck found,
        // change status from 'pending' to 'fulfilled'
        resolve('Bringing tacos')
    },5000)
})

```

#### Reject Scenario

```JavaScript 
const promise = new Promise((resolve,reject) => {
    // Change status from 'pending' to 'rejected'
    reject()
})
```
```JavaScript 
const promise = new Promise( (resolve,reject) => {
    setTimeout(()=> {
        // Food truck not found,
        // change status from 'pending' to 'rejected'
        reject('Not bringing tacos')
    },5000)
})
```

### How to execute callback functions based on the status change?

```JavaScript
// Success and failure callbacks
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
```

```JavaScript
// Promise status: pending to fulfilled
promise.then(onFulfillment)
// Promise status: pending to rejected
promise.catch(onRejection)
```

## then() function

```JavaScript
const promise = new Promise( (resolve, reject) => {
    resolve() or reject()
})

promise.then(onFulfillment)
promise.catch(onRejection)

// Equivalent statement
promise.then(onFulfillment,onRjection)
```

| separate calls | single call
|-- | -
|encouraged approach | onRjection callback handles error from only the Promise
| Even if your fulfillment callback throws an exception, it is caught and then you can handle that exception gracefully | If your callback functions itself throws an error or exception, there is no code to handle that

## Chaining Promises

```JavaScript
const promise = new Promise( (resolve, reject) => {
    resolve() or reject()
})

promise.then(onFulfillment)
promise.catch(onRejection)

// Equivalent satatement
promise.then(onFulfillment).catch(onRjection)
```

- both then and catch methods return promises
- then() and catch() methods can be chained in JavaScript

**Callback Hell**

```Java Script
fetchCurrentUser('api/user',function(result){
    fetchFollowersByUserId('api/followers/${result.userId}',function(result){
        fetchFollowerInterests('api/interests/${result.followerId}',function(result){
            fetchInterestTags('api/tags/${result.interestId}',function(result){
                fetchTagDescription('api/description/${result.tagId}',function(result){
                    // Finally display the data
                })
            })
        })
    })
})
```

**Rewritten using Promise**

```Java Script
const promise = fetchCurrentUser('api/user')
promise
.then(result=>fetchFollowersByUserId('api/followers/${result.userId}'))
.then(result=>fetchFollowerInterests('api/interests/${result.followerId}'))
.then(result=>fetchInterestTags('api/tags/${result.interestId}'))
.then(result=>fetchTagDescription('api/description/${result.tagId}'))
.then(result=> console.log('Display the data',result))
```

## Promise - Static Methods

### 1. Promise.all()

Query multiple APIs and perform some actions but only after all the APIs have finished loading

```Java Script
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise( (resolve,reject) => {
    setTimeout(resolve, 100, 'foo')
})

Promise.all([promise1,promise2,promise3]).then( (values) => { cosole.log(values)})
```

- Promise.all() method takes an iterable of promises as an input and returns a single promise that resolves to an array of the results of the input promises.
- Returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises.
- It rejects immediately if any of the input promises reject or the non-promises throw an error, and will reject with this first rejection message/error.

### 2. Promise.allSettled()

Promise.allSettled() waits for all input promises to complete regardless of whether or not one of them is rejected.

```Java Script
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise( (resolve,reject) => {
    setTimeout(resolve, 100, 'foo')
})

Promise.allSettled([promise1,promise2,promise3]).then( (values) => { cosole.log(values)})
```

### 3. Promise.race()

Promise.race() method returns a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects, with the value or reason from that promise

``` Java Script
const promise1 = new Promise( (resolve, reject) => {
    setTimeout(resolve,500,'one')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,100,'two')
})

Promise.race([promise1,promise2]).then((value)=>{
    console.log(value)
    // Both resolve, but promise2 is faster
})
// expected output: 'two'
```