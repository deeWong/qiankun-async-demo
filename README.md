# 复现使用qiankun后异步加载的问题

npm install
npm run examples:install
npm run examples:start

复现：
* 访问http://localhost:7099/react16。
* 设置chrome tool 的Network，网络的2g（可以新增一个，上传下载速度都为1kb/s）。
* 点击'React 15', 然后快速点击回到'React 16'，然后把Network的网络设置会原来正常网速。
* 再次点击'React 15'，发现页面空白！

这里要设置Network网速，主要模拟子应用的'React 15'按需加载的js文件还在加载过程中快速切换的情况。