<template>
  <van-cell title="昵称" :value="user.username" is-link @click="toEdit('username', '昵称', user.username)"/>
  <van-cell title="账号" is-link :value="user.userAccount" @click="toEdit('userAccount', '账号', user.userAccount)"/>
  <van-cell title="头像">
    <img style="height: 48px" :src="user.avatarUrl"/>
  </van-cell>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender', '性别', user.gender)"/>
  <van-cell title="电话" is-link :value="user.phone" @click="toEdit('phone', '电话', user.phone)" />
  <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email', '邮箱', user.email)" />
  <van-cell title="编号" :value="user.planetCode" />
  <van-cell title="注册时间" :value="user.createTime" />
  <div style="margin: 16px;">
    <van-button block type="primary" @click="logout">
      退出
    </van-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userStore } from '@/store/user';

const router = useRouter();

const user = ref({
  id: '',
  username: '',
  userAccount: '',
  avatarUrl: '',
  gender: '',
  phone: '',
  email: '',
  planetCode: '',
  createTime: '',
})
const userInfo = userStore();

const getUserInfo = async () => {
  userInfo.getUser().then((res) => {
    if(res.code == 200) {
      user.value = res.data
      console.log(res.data, 'userInfo')
    }
  });
};

getUserInfo();

const toEdit = (type: string, title: string, value: string) => {
  router.push({
    path: '/user/edit',
    query: {
      id: user.value.id,
      type: type,
      title: title,
      value: value,
    },
  });
}

const logout = () => {
  userInfo.userLogout().then((res) => {
    if(res.code == 200) {
      router.push('/login')
    }
  });
}

</script>

<style>

</style>