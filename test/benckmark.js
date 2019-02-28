/**
 * 性能测试
 */

let Benchmark = require('benchmark')

var suite = new Benchmark.Suite;

let arr = [1,2,3,4,5,6,7,8,9,10]

// add tests
suite
    .add('for', function () {
        for(let i = 0, len = arr.len; i < len; i++) { }
    })
    .add('forEach', function () {
        arr.forEach(v => {  })
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });