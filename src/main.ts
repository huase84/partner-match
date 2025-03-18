import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
// import "./permission"
import { createPinia } from 'pinia'

// 按需引入vant组件
import { Button, NavBar, Icon, Toast, Tabbar, TabbarItem, Search, TreeSelect, Tag, Divider, Cell, CellGroup, Form, Field, Card } from 'vant'

const pinia = createPinia()
const app = createApp(App)
// 按需引入vant组件
app.use(pinia)
app.use(Button)
app.use(NavBar)
app.use(Icon)
app.use(Toast)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Search)
app.use(TreeSelect)
app.use(Tag)
app.use(Divider)
app.use(Cell);
app.use(CellGroup);
app.use(Form);
app.use(Field);
app.use(Card);
app.use(router)

// 挂载主页面
app.mount('#app')
