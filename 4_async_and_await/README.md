# Async Await

The async await keywords allow us to write completely synchronous looking code while performing asynchronous tasks behind the scences

## Async

- The async keyword is used to declare async functions
- Async functions are functions that are instances of the AsyncFunction constructor
- Unlike normal functions, async functions always return a promise

**Normal function**

```Java Script
function greet(){ return 'Hello'}

greet()

// browser console
Hello
```

**Async Function**

```Java Script
async function greet(){ return 'Hello'}

greet()

//browser console
Promise{<fulfilled>:"Hello"}
```

```Java Script
async function greet(){
    return Promise.resolve("Hello")
}

greet().then( (value) => console.log(value))

//browser console
Hello
```

## Await

- await keyword can be put infront of any async promise based function to pause your code until that promise settles and returns its result
- await only works inside async functions. Cannot use await in normal functions

```Java Script
async function greet(){
    let promise = new Promise( (resolve,reject) => {
        setTimeout( () => resolve("Hello"), 1000)
    })

let result = await promise;

console.log(result)
}

greet()
```

**Chainging Promises vs async-await**

```Java Script
const promise = fetchCurrentUser('api/user')
promise
.then(result=>fetchFollowersByUserId('api/followers/${result.userId}'))
.then(result=>fetchFollowerInterests('api/interests/${result.followerId}'))
.then(result=>fetchInterestTags('api/tags/${result.interestId}'))
.then(result=>fetchTagDescription('api/description/${result.tagId}'))
.then(result=> console.log('Display the data',result))
```

```Java Script
async function fetchData(){
    const user = await fetchCurrentUser('api/user')
    const followers = await fetchFollowersByUserId('api/followers/${user.userId}')
    const interests = await fetchFollowerInterests('api/interests/${followers.followerId}')
    const tags = await fetchInterestTags('api/tags/${interests.interestId}')
    const description = await fetchTagDescription('api/description/${tags.tagId}')
    console.log('Display the data',result)
}
```

```Java Script
async function fetchData(){
    try {
        const user = await fetchCurrentUser('api/user')
        const followers = await fetchFollowersByUserId('api/followers/${user.userId}')
        const interests = await fetchFollowerInterests('api/interests/${followers.followerId}')
        const tags = await fetchInterestTags('api/tags/${interests.interestId}')
        const description = await fetchTagDescription('api/description/${tags.tagId}')
        console.log('Display the data',result)
    } catch( e ){
        console.log('Error', e)
    }
}
```

### Sequential vs Concurrent vs Parallel execution

```Java Script
function resolveHello(){
    return new Promise( resolve => {
        setTimeout( function() {
            resolve('Hello')
        }, 2000)
    })
}
```

```Java Script
function resolveWorld(){
    return new Promise( resolve => {
        setTimeout( function() {
            resolve('World')
        }, 1000)
    })
}
```
1. Sequential Execution

```java script
async function sequentialStart(){
    const hello = await resolveHello()
    console.log(hello) // logs after 2 seconds

    const world = await resolveWorld()
    console.log(world) // logs after 2 + 1 = 3 seconds
}

sequentialStart()
```

2. Concurrent Execution

```Java Script
async function concurrentStart(){
    const hello = resolveHello()
    const world = resolveWorld()

    console.log(await hello) // logs after 2 seconds
    console.log(await world) // logs after 2 seconds
}

concurrentStart()
```

3. Parallel Execution

```Java Script
function parallel(){
    Promise.all([
        (async () => console.log(await resolveHello())), // Logs after 2 seconds
        (async () => console.log(await resolveWorld())) // Logs after 1 seconds
    ])
}

parallel()
```

```Java Script
async function parallel(){
    await Promise.all([
        (async () => console.log(await resolveHello())), // Logs after 2 seconds
        (async () => console.log(await resolveWorld())) // Logs after 1 seconds
    ])
    console.log('Finally')
}

parallel()
```

## Summary

- The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
- async-await introduced in ES2017
- async keyword - returns a Promise
- await keyword - pause execution till the promise is resolved or rejected
- sequentail vs conscurrent vs parallel