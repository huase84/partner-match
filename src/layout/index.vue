<template>
  <van-nav-bar
    title="首页"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <div class="contant">
    <RouterView />
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { showToast } from 'vant'
import 'vant/es/toast/style';
import { ref } from 'vue';
import route from '../router/index.js';

// 默认index页
const active = ref('index');
route.push('/' + active.value)

// 切换路由
const onChange = () => {
  route.push('/' + active.value)
}
// 返回
const onClickLeft = () => {
  route.back()
}
// 跳转搜索页
const onClickRight = () => {
  route.push('/searchTag')
}


</script>

<style scoped>

</style>