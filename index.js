function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return function imNamed() {
        return 'Hello, world!'
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        return 'Hello, world!'
    }
}