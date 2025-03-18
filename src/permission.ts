import router from "@/router"
import { userStore } from '@/store/user.ts'

// 前置路由守卫
router.beforeEach(async (to, from) => {
  const user = userStore()
  // 判断用户是否登录
  if(to.name !== 'Login') {
    // 获取用户信息
    const res = await user.getUser()
    if(res.code == 200 && res.data != null) {
    } else {
      // 跳转至登录页 
      return "/login"
    }
  }
})