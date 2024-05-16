const { EventEmitter } = require('node:events')

const MY_EVENT = 'myEvent'

class MyEmitter extends EventEmitter {
    constructor() {
        super()
        console.log('inited MyEmitter')


    }
}

const myEmitter = new MyEmitter()



myEmitter.on(MY_EVENT, (...arg) => {
    console.log('myEvent', ...arg)
})


myEmitter.on(MY_EVENT, (...arg) => {
    console.log('myEvent2', ...arg)
})

myEmitter.on('sendEmail', (...arg) => {
    console.log('sendEmail', ...arg)
})


module.exports = {
    myEmitter,
    MY_EVENT
}