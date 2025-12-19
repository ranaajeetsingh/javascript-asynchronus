# Asynchronous JavaScript

### Topics to cover

1. Timeouts and Intervals
2. Callbacks
3. Promises
4. async await
5. Event loop

# JavaScript

In its most basic form, JavaScript is a synchronous, blocking, and single-threaded language.

### Synchronous
- If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time

```JavaScript
function A(){
    console.log('A')
}

function B(){
    console.log('B')
}

A()
B()

-> logs A and then B
```

### Blocking
- No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed.
- If function A had to execute an intensive chuck of code, JavaScript has to finish that without moving on to function B. Even if that code takes 10 seconds or 1 minute.
- Web app runs in a browser and it executes an intersive chunk of code without returning control to the browser, the browser can appear to be frozen.

### Single-threaded
- A thread is simply a process that your javascript program can use to run a task
- Each thread can only do one task at a time.
- JavaScript has just the one thread called the main thread for executing any code.

## Problem with synchronous, blocking, and single-threaded model:

```JavaScript
let response = fetchDataFromDB('endpoint')

displayDataFromDB(response)
```

- `fetchDataFromDB('endpoint')` could take 1 second or even more
- During that time, we can't run any further code
- JavaScript, if is simple proceeds to the next line without waiting, we have an error because data is not what we expect it to be
- We need a way to have asynchronous behaviour with JavaScript

## Async JavaScript - How?

- Just JavaScript is not enough
- We need new pieces which are outside of JavaScript to help us write asynchronous code which is where web browsers come into play
- Web browsers define functions and APIs that allow us to register functions that should not be executed synchronously, and should instead be invoked asynchronously when some kind of event occurs.
- For example, that could be the passage of time ( setTimeout or setInterval), the user's interaction with mouse (addEventListener), or the arriaval of data over the newtwork (callbacks, promises, async-await)
- You can let your code do serveral things at the same time without stopping or blocking your main thread