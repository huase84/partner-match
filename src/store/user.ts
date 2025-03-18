import { defineStore } from 'pinia'
import { login, register, getUserInfo, logout} from '@/api/user'
import { ref } from 'vue'

export const userStore = defineStore('user', () =>{
  const user = ref({})
  
  const setUser = (data: user) => {
    user.value = data
  }

  async function userLogin(loginInfo: LoginInfo) {
    try {
      const res = await login(loginInfo)
      if (res.code === 200) {
        user.value = res.data
      }
      return res // 自动包装为Promise
    } catch (err) {
      throw err // 保持错误传递
    }
  }

  async function getUser() {
    try {
      const res = await getUserInfo()
      
      return res // 自动包装为Promise
    } catch (err) {
      throw err // 保持错误传递
    }
  }

  async function userLogout() {
    try {
      const res = await logout()
      if (res.code === 200) {
        user.value = {}
      }
      return res
    } catch (err) {
      throw err // 保持错误传递
    }
  }
  return { user, setUser, userLogin, getUser, userLogout }
})