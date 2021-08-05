## 部署文档

### 1.安装依赖

```
  npm install
```

### 2.打包代码

```
  npm run build // 打包正式环境
  //  npm run build:test //打包测试环境
```

### 3.部署代码

将build  文件下代码全部拷贝至 web 服务器容器下。


### 4.环境请求地址配置(可选)

```
 .env 文件下 
 修改 REACT_APP_TEST_BASE_URL 测试环境
 REACT_APP_PROD_BASE_URL  正式环境
```

### 5.本地调试（可选）

```
 npm run start // 本地代理（可跨域）
 setupProxy 下修改代理地址。

 npm run start:prod 请求正式环境地址
 npm run start:test 请求测试环境地址
 
```

### 6.部分目录文件 (可选)

```
/src 所有代码文件
/src/locales 多语言文件资源
/src/assets 静态资源
/src/scenes 页面组件
/src/services 接口请求
/src/utils 工具类

```
