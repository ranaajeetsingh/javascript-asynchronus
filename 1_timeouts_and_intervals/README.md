# Timeouts & Intervals

The traditional methods JavaScript has available for running code asynchronously -
- after a set time period elapsed or
- at regular intervals of time
- setTimeout()
- setInterval()

## setTimeout()

`setTimeout(function, duration, param1, param2, ...)`

- The setTimeout() function executes a particular block of code once after a specified time has elapsed.
- The first parameter is a function to run, or a reference to a function defined elsewhere
- The second parameter is a number representing the duration in milliseconds to wait before executing the code
- After the second parameter, you can pass in zero or more values that represent any parameters you want to pass to the function when it is run

```javascript
function greet(){
    console.log('Hello')
}

setTimeout(greet,2000)

-> logs 'Hello' to the console after 2 seconds
```

```javascript
function greet(name){
    console.log(`Hello ${name}`)
}

setTimeout(greet,2000,'Ajeet')

-> logs 'Hello Ajeet' to the console after 2 seconds
```

- To clear a timeout, you can use the clearTimeout() method passing in the identifier returned by setTimeout as a parameter

```javascript
function greet(){
    console.log('Hello')
}

const timeoutId = setTimeout(gree,2000,'Ajeet')

clearTimeout(timeoutId)

-> Nothing is logged to the console
```

- A more practical scenario is clearing timeouts when the component is unmounting to free up the resources and also prevent code from incorrectly executing on an unmounted component.

## setInterval()

`setInterval(function, duration, param1, param2, ...)`

- The setInterval() function repeatedly runs the same code over and over again at regular intervals.
- The first parameter is a function to run, or a reference to a function defined elsewhere
- The second parameter is a number representing the duration in milliseconds to wait before executing the code
- After the second parameter, you can pass in zero or more values that represent any parameters you want to pass to the function when it is run

```javascript
function greet(){
    console.log('Hello')
}

setInterval(greet,2000)

-> logs 'Hello' to the console every 2 seconds
```

- Intervals keep running a task forever so you should clear the interval when appropriate

```javascript
const intervalId = setInterval(greet,2000,'Ajeet')

clearInterval(intervalId)
```

## Key Points

1. Timers and intervals are not part of JavaScript itself. They are implemented by the browser and setTimeout and setInterval are basically names given to that functionality in JavaScript
2. Duration parameter is the minimum delay, not guaranteed delay
3. It is possible to achieve the same effect as setInterval with a recursive setTimeout
   1. setTimeout()
      1. duration is guaranteed between executions.
      2. Irrespective of how long the code takes to run, the interval will remain the same.
      3. Code can take longer to run the time interval itself? Recursive setTimeout
      4. You can calculate a different delay before running each iteration.
       
      ```javascript
      setTimeout(function run(){
        console.log('Hello')
        setTimeout(run,100)
      },100)
      ```
    2. setInterval()
       1. the duration interval includes the time taken to execute the code you want to run
       2. the code takes 4oms to run, the interval is 60ms
       3. the code takes 50ms to run, the interval is 50ms
       4. setInterval is always a fixed interval duration
        ```javascript
        setInterval(function run(){
        console.log('Hello')
        },100)
        ```