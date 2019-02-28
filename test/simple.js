const { add, mul } = require('../src/main')
// const assert =  require('assert')

// assert.equal(add(1, 2), 3, '结果错误')

const { should, expect, assert } = require('chai')

// should()
// add(2, 3).should.be.equal(6)

// expect(add(2, 3)).to.equal(6)

assert.equal(add(2, 3), 6)