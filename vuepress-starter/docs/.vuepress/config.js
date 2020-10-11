const moment = require('moment');

module.exports = {
  title: '超群的文档', // 设置网站标题
  description: '笔记 博客',
  base: '/', // 设置站点根路径
  port: 8086,
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean 
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        items: [
          { text: '快速使用VuePress', link: '/about/' },
          { text: '我的文章', link: '/articles/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/OhBadWorld' },
    ],
    // sidebar: 'auto'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          moment.locale('zh-CN');
          return moment(timestamp).format('LLLL');
        }
      }
    ]
  ]
}