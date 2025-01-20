// 路由方法
import { createWebHistory, createRouter } from 'vue-router'

import Index from '../views/Index.vue'
import Team from '../views/Team.vue'
import SearchTag from '../views/SearchTag.vue'

// 路由配置
const routes = [
  { path: '/index', title: '首页', component: Index },
  { path: '/team', title: '队伍', component: Team },
  { path: '/searchTag', component: SearchTag },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router