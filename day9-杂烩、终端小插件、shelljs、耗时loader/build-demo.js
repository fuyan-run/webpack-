
// 终端提示小工具 ora
var ora = require('ora'),
	spinner = ora(`打包环境是：${process.env.NODE_ENV}`);

	spinner.start();
	
	setTimeout(() => {
		spinner.color = 'green';
		spinner.text = '正在打包...';
	}, 1000);
	
	// console.log(process.env.NODE_ENV);
	
	setTimeout(() => {
		// spinner.fail("我快要关闭了~");
		spinner.warn("我快要关闭了~");
		// spinner.succeed("操作结束~");
	}, 2000);
	
	setTimeout(() => {
		spinner.stop();
	}, 3000);
	