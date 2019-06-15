##环境

## 安装
#### npm i -g typescript


## 配置文件的建立
1. 直接新建文件tsconfig.js
2. tsc --init


## 默认情况下，TS会做出下面几种假设：
1. 假设当前的执行环境是dom
2. 如果代码中没有使用模块化语句（import export）,便认为该代码是全局执行
3. 编译目标是ES3

## 有两种方式更改以上假设：
1. 使用tsc命令行的时候，加上选项参数
2. 使用TS配置文件，更改编译选项

## 使用
编译tsc         //filename


使用了配置文件后，使用tsc进行编译时，不能跟上文件名，如果跟上文件名，会忽略配置文件

## 配置开发环境
需要有node环境的话，使用@types/node  


### 安装npm i -g ts-node
编译并执行      //ts-node：  enrty           入口文件名  

@types/node
@types是一个ts官方的类型库，其中包含了很多对js代码的类型描述，如果需要使用jq的类型检查，@types/jquery


## 使用第三方库简化开发流程
ts-node:    ts-node /编译文件名


### 监测文件变化

  "scripts": {
    //--watch  监控那个目录下的文件
    //-e    监控哪种类型的文件
    //ts-node编译并执行文件
    "dev": "nodemon -e ts --watch src --exec ts-node src/index.ts"
  },







