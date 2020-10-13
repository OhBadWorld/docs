const navConf = require('./config/navConf');
const pluginsConf = require('./config/pluginsConf');

module.exports = {
  title: '超群的文档', // 设置网站标题
  description: '笔记 博客',
  base: '/', // 设置站点根路径
  port: 8086,
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean 
    logo: '/assets/img/logo.jpg',
    nav: navConf,
    // sidebar: 'auto'
  },
  plugins: pluginsConf
}