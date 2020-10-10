module.exports = {
  title: '文档记录', // 设置网站标题
  base: '/', // 设置站点根路径
  port: 8086,
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: 'auto'
  }
}