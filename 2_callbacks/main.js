function greet(name){
    console.log(`Hello ${name}`)
}

function higherOrderFunction(callback){
    const name = 'Ajeet'
    callback(name)
}

higherOrderFunction(greet)