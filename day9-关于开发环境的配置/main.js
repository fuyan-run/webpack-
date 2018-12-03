// var style = require('./asset/demo.less') 两种方式都行
import './asset/demo.less';
require('./asset/demo1.css')

import Vue from "vue"
import App from './App.vue';

console.log('开始打印');
let a = function () {
    console.log(1)
}
setTimeout(_=>{
    console.log('我是es6定时器,打印成功!!')
}, 1000)

/**
 * 注意，按照这个打包.vue文件的时候
 * 因为自动生成html的原因
 * 会出现没有挂载点的情况，手动加下，下个版本迭代完善
 * 
 */
new Vue({
    el: "#app",
    render(cl) { // 使用作为根组件
        return cl(App);
    },
});
