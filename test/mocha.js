const { add, mul, cover } = require('../src/main')
const assert = require('assert')

describe('#math', () => {
    // describe('#add()', () =>{
    //     it('1 + 1 === 2', () => {
    //         assert.equal(add(1, 1), 2)
    //     })
    // })
    // describe.skip('#mul()', () => {
    //     it ('1 * 1 === 1', () => {
    //         assert.equal(mul(1, 1), 1)
    //     })
    // })
    // describe.skip('#mul()', () => {
    //     it('1 * 1 === 1', () => {
    //         assert.equal(mul(1, 1), 1)
    //     })
    // })
    describe('#mul()', () => {
        it('1 * 1 === 1', () => {
            assert.equal(add(1, 1), 1)
        })
    })
    describe('#mul()', () => {
        it('1 * 1 === 1', () => {
            assert.equal(mul(1, 1), 1)
        })
    })
    describe('#cover', () => {
        it('1 + 1 === 2', () => {
            assert.equal(cover(1, 1), 2)
        })
    })
    describe('#cover', () => {
        it('1 + 1 === 2', () => {
            assert.equal(cover(1, 2), 2)
        })
    })
    describe('#cover', () => {
        it('1 + 1 === 2', () => {
            assert.equal(cover(2, 1), 2)
        })
    })
})