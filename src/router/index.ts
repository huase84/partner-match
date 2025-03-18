// 路由方法
import { createWebHistory, createRouter } from 'vue-router'

import Layout from '../layout/index.vue'
import Index from '../views/Index.vue'
import Team from '../views/Team.vue'
import SearchTag from '../views/SearchTag.vue'
import UserInfo from '../views/UserInfo.vue'
import UserEdit from '../views/UserEdit.vue'
import SearchResultList from '../views/SearchResultList.vue'
import Login from '../views/login.vue'

// 路由配置
const routes = [
  { path: '/login', name: 'Login', title: '登录', component: Login },
  { path: '/', 
    component: Layout,
    redirect: '/index', 
    children:[
      { path: 'index', title: '首页', component: Index },
    ]
  },
  { path: '/', component: Layout,
    children:[
      { path: 'team', title: '队伍', component: Team },
    ]
  },
  { path: '/', component: Layout,
    children:[
      { path: 'searchTag', component: SearchTag },
      { path: 'searchTag/searchResultList', title: '搜索结果', component: SearchResultList },
    ]
  },
  { path: '/', component: Layout,
    children:[
      { path: 'user', title: '用户信息', component: UserInfo },
      { path: 'user/edit', title: '用户信息修改', component: UserEdit }
    ]
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router