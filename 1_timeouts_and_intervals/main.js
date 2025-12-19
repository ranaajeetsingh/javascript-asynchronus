function greet(){
    console.log('Hello')
}

setTimeout(greet,2000)

function greet1(name){
    console.log(`Hello ${name}`)
}

setTimeout(greet1,2000,'Ajeet')

const setTimeoutId = setTimeout(greet1,2000,'Rana')

clearTimeout(setTimeoutId)

const intervalId = setInterval(greet,2000)

clearInterval(intervalId)