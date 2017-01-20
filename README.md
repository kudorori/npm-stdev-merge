# Stdev Merge

# 用途
在不曉得原始數據的前提下，將數個已知數據合併(樣本數、平均值、標準差)(相關公式請參考Reference)

#API

- constructor(p=false)
	- params:
		- p:是否為母體標準差

- push(n,mu,sd)
	- desc: 新增要合併的數據
	- params:
		- n: 樣本數
		- mu: 平均值
		- sd: 標準差
- remove(n,mu,sd)
	- desc: 移除已合併的數據
	- params:
		- n: 樣本數
		- mu: 平均值
		- sd: 標準差

# Example
```
var _stdev = require("stdev-merge");
var stdev = new _stdev();

stdev.push(50,42,6);
stdev.push(25,45,7);
console.log(stdev.sd) //=>output 6.46....
stdev.remove(25,45,7);
console.log(stdev.sd) //=>output 6

```

# Reference
[PTT](https://www.ptt.cc/bbs/Statistics/M.1192623021.A.html)