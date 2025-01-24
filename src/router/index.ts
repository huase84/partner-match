// 路由方法
import { createWebHistory, createRouter } from 'vue-router'

import Index from '../views/Index.vue'
import Team from '../views/Team.vue'
import SearchTag from '../views/SearchTag.vue'
import UserInfo from '../views/UserInfo.vue'
import UserEdit from '../views/UserEdit.vue'
import SearchResultList from '../views/SearchResultList.vue'

// 路由配置
const routes = [
  { path: '/index', title: '首页', component: Index },
  { path: '/team', title: '队伍', component: Team },
  { path: '/searchTag', component: SearchTag },
  { path: '/user', title: '用户信息', component: UserInfo },
  { path: '/user/edit', title: '用户信息修改', component: UserEdit },
  { path: '/searchTag/searchResultList', title: '搜索结果', component: SearchResultList },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router