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
    <Index v-if="active == 'index'" />
    <Team v-if="active == 'team'" />
  </div>
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" name="user">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { showToast } from 'vant'
import 'vant/es/toast/style';
import { ref } from 'vue';
import Index from '../views/Index.vue'
import Team from '../views/Team.vue'

const onClickLeft = () => showToast('返回')
const onClickRight = () => showToast('按钮')
const onChange = () => showToast('切换')
const active = ref('index');

</script>

<style scoped>

</style>