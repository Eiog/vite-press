import { defineConfig, defineConfigWithTheme } from 'vitepress'
export default defineConfig({
    title: 'VitePress',
    description: 'Just playing around.',
    themeConfig:{
        logo: '/images/新鲜果蔬_新鲜水果橘子.png',
    sidebar: [
      {
        text:'shouye',
        items:[
            { text: 'Introduction', link: '/guide/项目配置.md' },
        ]
      }
    ]
    }
})