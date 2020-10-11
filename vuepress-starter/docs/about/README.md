# Hello VuePress
[参考官网](https://www.vuepress.cn/)
## 初步使用 VuePress

注意 VuePress基于node 8.0+

1. 创建并进入一个新目录
```
mkdir vuepress-starter && cd vuepress-starter
```
2. 使用你喜欢的包管理器进行初始化
```
yarn init # npm init

yarn install
```
3. 将 VuePress 安装为本地依赖
我们已经不再推荐全局安装 VuePress
```
yarn add -D vuepress # npm install -D vuepress
```

**注意**
---

如果你的现有项目依赖了 `webpack 3.x`，我们推荐使用 `Yarn` 而不是 `npm` 来安装 `VuePress`。因为在这种情形下，`npm` 会生成错误的依赖树。

---

4. 创建你的第一篇文档
```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

5. 在 `package.json` 中添加一些 `scripts`
这一步骤是可选的，但我们推荐你完成它。在下文中，我们会默认这些  `scripts` 已经被添加。
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
6. 在本地启动服务器
```
yarn docs:dev # npm run docs:dev
```
`VuePres`s 会在 `http://localhost:8080` 启动一个热重载的开发服务器。

**注意**
---

步骤2的时候，第一次使用 `yarn install` 可能会报这样的错误
`error An unexpected error occurred: "http://registry.cnpmjs.org/vuepress: Hostname/IP does not match certificate's altnames: Host: registry.cnpmjs.org. is not in the cert's altnames: DNS:r.cnpmjs.org".`

这是因为 `nodejs` 安装之后，`npm`的源 默认为`https://registry.npm.org`

而 `yarn` 的源 是 `https://registry.npm.taobao.org`

输入如下命令 查看 `npm`的源

`npm config get registry`

修改`npm`源
`npm config set registry https://registry.npm.taobao.org`

---

<div align="center">
 <img src="./../imgs/image.jpg" />
</div>

6. 自定义更新时间格式
安装`moment`插件
```
yarn add -D moment
```