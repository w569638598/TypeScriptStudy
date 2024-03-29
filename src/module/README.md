# 模块儿化

|       配置名称      |           含义        |
|--------------------|-----------------------|
|       module        | 设置编译结果中使用的模块化标准
moduleResolution      |  设置解析模块的模式
noImplicitUseStrict   |编译结果中不包含"use strict"
removeComments        | 编译结果移除注释
noEmitOnError         |错误时不生成编译及如果
esModuleInterop       | 启用es模块化交互非es模块导出


> 前端领域中的模块化标准： ES6、commonjs、amd、umd、system、esnext

> TS中如何书写模块儿化语句
> 编译结果？？

### TS中如何书写模块儿化语句
TS中，导入和导出模块儿，同意使用ES6的模块儿化标准

### 编译结果中的模块儿化
可配置

TS中的模块儿化在编译结果中： 
- 如果编译结果的模块儿化标准是es6，与结果没有区别
- 如果编译结果的模块儿化便准是commonjs： 导出的声明会变成exports的属性，默认的导出会变成exports的default熟悉


### 如何在TS中书写commonjs模块儿化代码
导出： export = {}
导入：import {} = require("")