import router from "@/router"
import { userStore } from '@/store/user.ts'

var isAuthenticated  = false

// 前置路由守卫
router.beforeEach((to, from) => {
  const user = userStore()
  // 判断用户是否登录
  if(!isAuthenticated) {
    if(to.name !== 'Login') {
      // 获取用户信息
      user.getUser().then(res => {
        if(res.code == 200 && res.data != null) {
          isAuthenticated = true
        } else {
          // 跳转至登录页 
          return '/login'
        }
      }).catch(err => {
        console.log(err)
        return '/login'
      })
    }
  }
})