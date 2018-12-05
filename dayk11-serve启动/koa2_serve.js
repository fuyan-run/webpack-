const Koa = require('koa');
const koaStatic = require("koa-static");
const app = new Koa();

const path = require("path")

var open = require("open");

//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8281;

app.use(koaStatic(path.join( __dirname, "./dist"),{ extensions: ['html']}));

app.listen(port, ()=>{
    open(`http://${hostName}:${port}`, "chrome");

    console.log(`服务器运行在: http://${hostName}:${port}`);
});
