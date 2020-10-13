const moment = require('moment');
const screct = require('./config/screct');

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
    ],
    [
      '@vssue/vuepress-plugin-vssue',
      {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
  
        // 其他的 Vssue 配置
        owner: screct.owner,
        repo: screct.repo,
        clientId: screct.clientId,
        clientSecret: screct.clientSecret,
        autoCreateIssue: true,
      },
    ],
    ['@vuepress/back-to-top'],
    [
      '@vuepress/google-analytics',
      {
        'ga': screct.ga
      }
    ]
  ]
}