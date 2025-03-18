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
  { path: '/', 
    component: Layout,
    children:[
      { path: 'login', name: '登录', component: Login },
    ]
  },
  { path: '/', 
    component: Layout,
    redirect: '/index', 
    children:[
      { path: 'index', name: '首页', component: Index },
    ]
  },
  { path: '/', component: Layout,
    children:[
      { path: 'team', name: '队伍', component: Team },
    ]
  },
  { path: '/', component: Layout,
    children:[
      { path: 'searchTag', name: '搜索', component: SearchTag },
      { path: 'searchTag/searchResultList', name: '搜索结果', component: SearchResultList },
    ]
  },
  { path: '/', component: Layout,
    children:[
      { path: 'user', name: '用户信息', component: UserInfo },
      { path: 'user/edit', name: '用户信息修改', component: UserEdit }
    ]
  },
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router