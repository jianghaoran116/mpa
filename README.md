# 财务云-移动端智能报表-单据详情部分  
📢 使用rollup工具生成js文件、用babel支持es6+语法、stylus预处理css。  
**build:prod生成压缩后的静态文件**

## ⚒︎ Build Environment:  
  - rollup 
  - babel  
  - stylus // 底层node  
  
## ⚙︎ Code Base:  
  - html  
  - css // stylus预编译
  - js // es6+  
  
## 🎒Usage:
  - build:dev:js // 生成测试坏境的js  
  - build:dev:css // 生成测试坏境的css  
  - build:prod:js // 生成生产环境的js  
  - build:prod:css // 生成生产环境的css  
  - build:prod // 生成生产环境的js和css    

``` javascript 
|-- DOC-DETAILS  
    |-- src // 源文件  
    |   |-- js // js文件
    |   |   |-- main.js   
    |   |-- styles // 样式 字体 图片  
    |       |-- fronts  
    |       |-- images   
    |       |-- index.styl
    |-- dist // 打包后的文件 
``` 