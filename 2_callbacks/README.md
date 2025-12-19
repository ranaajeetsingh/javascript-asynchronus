# Callbacks

In JavaScript, functions are first class objects
-   Just like an object, a function can be passed as an argument to a function
-   A function can also be returned as values from other functions

```JavaScript
function greet(name){
    console.log(`Hello ${name}`)
}

function greetAjeet(greetFn){
    const name = 'Ajeet'
    greetFn(name)
}

greetAjeet(greet)
```

- Any function that is passed as an argument to another function is called as a callback function is JavaScript
- The function which accepts a function as an argument or returns a function is called a higher order function

```JavaScript
function greet(name){
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback){
    const name = 'Ajeet'
    callback(name)
}

higherOrderFunction(greet)
```

# Why Callbacks?

## Synchronous Callbacks

A callback which is executed immediately is called a synchronous callback.

```JavaScript
function greet(name){
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback){
    const name = 'Ajeet'
    callback(name)
}

higherOrderFunction(greet)

let numbers = [1,2,3,4,5,6]
numbers.sort((a,b)=> a - b)
numbers.map(n => n * 2)
numbers.filter(n => n % 2 === 0)
```

## Asynchronous Callbacks

- An asynchronous callback is a callback that is often used to continue or resume code execution after an asynchronous operation has completed
- Callbacks are used to delay the execution of a function until a particular time or event has occured.
- Data fetching takes time and we can only run the function we want to after the data has been fetched and not immediately.

### Asynchronous callbacks examples

```JavaScript
// Example 1
function greet(name){
    console.log(`Hello ${name}`)
}

setTimeout(greet,2000,'Ajeet')

// Example 2
function callback(){
    document.getElementById("demo").innerHTML = "Hello world"
}

document.getElementById("btn").addEventListener("click",callback)


// Example 3

$.get("url",function(data){
    $(".result").html(data);
    alert("Load was performed.");
})
```

Callback functions allow you to delay the execution of a function

### Problem with the callbacks pattern

If you have mutliple callback functions where each level depends on the result obtained from the previous level, the nesting of functions becomes so deep that the code becomes difficult to read and maintain

**Callback Hell**

```JavaScript
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

## Summary

- Callbacks are functions passed as arguments to other functions
- They can be synchronous if they execute immediately or they can be asynchronous where they get executed after some time has passed, some event has occured or some data has been fetched.
- Callbacks were the go to pattern for asynchronously running code afte fetching some data.
- As more and more requests had to be made based on the data obtained from the previous requests, developers started to encounter what is known as the **callback hell**.