## 🧩 Build Environment:  
rollup 1.27.9   
babel v7.7.5

## 🛴 Usage:  

## ⚙️ Code Base:
react v16.6.3  
Redux  v4.0.4  
React-Router  v5.1.2  
stylus v0.54.7 // 底层node  
 
``` javascript 
|-- m-report // 混合方式划分文件结构    
    |-- app.jsx // 入口文件  
    |-- utils  
    |-- components // 应用的组件 对应view  
    |   |-- 404  
    |   |   |-- index.jsx  
    |   |   |-- index.styl  
    |   |-- home  
    |       |-- index.jsx  
    |       |-- index.styl  
    |-- containers  
    |   |-- DevTools.js  
    |-- fonts // 字体  
    |-- html-templates // 前端模版  
    |   |-- app.ejs  
    |-- layout // 布局相关的样式  
    |   |-- frame.jsx  
    |   |-- nav.jsx  
    |-- redux  
    |   |-- reducers.js  
    |-- routes  
    |-- styles // 全局样式  
    |   |-- app.styl  
    |   |-- reset.styl  
    |   |-- theme.styl  
    |   |-- images  
    |-- view // 页面的入口文件 一般为路由组件  
        |-- 404  
        |   |-- index-redux.js  
        |   |-- index.jsx  
        |   |-- index.styl  
        |-- home  
            |-- index-redux.js  
            |-- index.jsx  
            |-- index.styl  
```
