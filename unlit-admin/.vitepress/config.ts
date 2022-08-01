import { defineConfig, defineConfigWithTheme } from 'vitepress'
export default defineConfig({
    title: 'U-Admin',
    description: 'Just playing around.',
    themeConfig:{
        logo: '/images/新鲜果蔬_新鲜水果橘子.png',
    sidebar: [
      {
        text:'快速上手',
        items:[
            { text: '简介', link: '/guide/index' },
        ]
      }
    ]
    }
})