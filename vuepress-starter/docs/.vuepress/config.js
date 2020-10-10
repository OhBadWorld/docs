module.exports = {
  title: '文档记录', // 设置网站标题
  description: '超群的博客',
  base: '/', // 设置站点根路径
  port: 8086,
  themeConfig: {
    logo: '/assets/img/logo.jpg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'articles',
        items: [
          { text: '快速使用VuePress', link: '/about/' },
          { text: '我的文章', link: '/articles/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // sidebar: 'auto'
  }
}