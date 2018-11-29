// var style = require('./asset/demo.less') 两种方式都行
import './asset/demo.less';
require('./asset/demo1.css')

console.log('开始打印');
let a = function () {
    console.log(1)
}
setTimeout(_=>{
    console.log('我是es6定时器,打印成功!!')
}, 1000)