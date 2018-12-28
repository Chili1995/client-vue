# client-vue

> something for vue

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 自定义
```
var app = new Vue({
  el: '#app',
  data: {
      message : "xuxiao is boy" 
  },
   beforeCreate: function () {
            console.group('beforeCreate 创建前状态===============》');
           console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
           console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
           console.log("%c%s", "color:red","message: " + this.message)  
    },
    created: function () {
        console.group('created 创建完毕状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //undefined
           console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
           console.log("%c%s", "color:red","message: " + this.message); //已被初始化
    },
    beforeMount: function () {
        console.group('beforeMount 挂载前状态===============》');
        console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
        console.log(this.$el);
           console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
           console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
    },
    mounted: function () {
        console.group('mounted 挂载结束状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
        console.log(this.$el);    
           console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
           console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
    },
    beforeUpdate: function () {
        console.group('beforeUpdate 更新前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);   
           console.log("%c%s", "color:red","data   : " + this.$data); 
           console.log("%c%s", "color:red","message: " + this.message); 
    },
    updated: function () {
        console.group('updated 更新完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el); 
           console.log("%c%s", "color:red","data   : " + this.$data); 
           console.log("%c%s", "color:red","message: " + this.message); 
    },
    beforeDestroy: function () {
        console.group('beforeDestroy 销毁前状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);    
           console.log("%c%s", "color:red","data   : " + this.$data); 
           console.log("%c%s", "color:red","message: " + this.message); 
    },
    destroyed: function () {
        console.group('destroyed 销毁完成状态===============》');
        console.log("%c%s", "color:red","el     : " + this.$el);
        console.log(this.$el);  
           console.log("%c%s", "color:red","data   : " + this.$data); 
           console.log("%c%s", "color:red","message: " + this.message)
    }
})

beforecreated：el 和 data 并未初始化 
created:完成了 data 数据的初始化，el没有
beforeMount：完成了 el 和 data 初始化 
mounted ：完成挂载

beforecreate : 举个栗子：可以在这加个loading事件 
created ：在这结束loading，还做一些初始化，实现函数自执行 
mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
beforeDestroy： 你确认删除XX吗？ 
destroyed ：当前组件已被删除，清空相关内容

```
```
1.路由跳转
安装vue-router并引入



2.页面传参

```
