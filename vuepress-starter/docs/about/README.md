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

7. 使用vssue 给 静态文档增加 评论功能
   1. 在github上创建 [OAuth App](https://github.com/settings/developers)
   2. [步骤看这里](https://vssue.js.org/zh/guide/github.html)
   3. 给项目安装 vssue 和 github插件
    ```
    yarn add -D @vssue/vuepress-plugin-vssue
    yarn add -D @vssue/api-github-v4
    ```
   4. 使用插件
   ```
   // .vuepress/config.js

   module.exports = {
     plugins: {
       '@vssue/vuepress-plugin-vssue': {
         // 设置 `platform` 而不是 `api`
         platform: 'github-v4',
 
         // 其他的 Vssue 配置
         owner: 'OWNER_OF_REPO',
         repo: 'NAME_OF_REPO',
         clientId: 'YOUR_CLIENT_ID',
         clientSecret: 'YOUR_CLIENT_SECRET',
       },
     },
   };
   ```
8. 使用谷歌分析
  [参考这里 主要为了获得 gaId](https://jingyan.baidu.com/article/359911f572d91957fe03062d.html)

  主要为了获取UAid  (需要科学上网才行)
  ```
  yarn add -D @vuepress/plugin-google-analytics
  ```
9. 自动生成侧边栏
```
vuepress-plugin-auto-siderbar
```

<Vssue :options="{ locale: 'zh' }"/>