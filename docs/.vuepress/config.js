module.exports = {
    title: 'A梦组件',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/components/button/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            {
                title:'入门',
                children:[
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title:'组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/popo',
                    '/components/grid',
                    '/components/btt',
                    '/components/layout',
                    // '/components/toast',
                ]
            }




        ]
    },

}