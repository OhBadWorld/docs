
const moment = require('moment');
const screct = require('./screct');

module.exports = [
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