const num = function (a, b) {
    return a * b
}

module.exports = {
    add (...args) {
        return args.reduce((prev, cur) => prev + cur, 0)
    },
    mul (...args) {
        return args.reduce((prev, cur) => prev * cur, 1)
    },
    cover (a, b) {
        if (a > b) {
            return a - b
        } else if (b > a) {
            return a + b
        } else {
            return num(a, b)
        }
    }
}