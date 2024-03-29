import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 按需引入vant组件
import { Button, NavBar, Icon, Toast, Tabbar, TabbarItem } from 'vant'

const app = createApp(App)
// 按需引入vant组件
app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Toast)
app.use(Tabbar)
app.use(TabbarItem)

// 挂载主页面
app.mount('#app')
