import { RouteRecordRaw } from 'vue-router'

const routes = [
    { path: '/', redirect: '/pdf' },
    { path: '/:pathMatch(.*)*', component: () => import("@renderer/views/404.vue") },
    {
        path: '/demo',
        component:() => import('@renderer/components/common/layout/index.vue'),
        name: 'demo',
        children: [
            { path: 'test', name: '总览', component: () => import('@renderer/components/LandingPage.vue') },
        ]
    },
    {
        path: '/pdf',
        component:() => import('@renderer/components/common/layout/index.vue'),
        name: 'PDF工具',
        children: [{
        path: 'watermark',
        component: () => import("@renderer/views/pdf/watermark/index.vue")
        },
        {
            path: 'split',
            component: () => import("@renderer/views/pdf/split/index.vue")
            }]
    }
]

export default routes