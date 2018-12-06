// var style = require('./asset/demo.less') 两种方式都行
import './asset/demo.less';
require('./asset/demo1.css')
require('./asset/try.js')

import Vue from "vue"
import App from './App.vue';

console.log('开始打印');
let a = function () {
    console.log(1)
}
setTimeout(_=>{
    console.log('我是es6定时器,打wsddsd印成功!!')
}, 1000)

/**
 * vue
 */
document.write("<div id='app'></div>");

new Vue({
    render(cl) {
        return cl(App);
    },
}).$mount("#app");

// new Vue({ // 两种版本
//     components: { App },
//     template: '<App/>'
//   }).$mount("#app")
