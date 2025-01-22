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
  <van-cell title="注册时间" :value="user.createTime.toISOString()" />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const user = {
  id: 1,
  username: '鱼皮',
  userAccount: 'dogYupi',
  avatarUrl: '',
  gender: '男',
  phone: '12131133313',
  email: '23432444@qq.com',
  planetCode: '2220',
  createTime: new Date(),
};

const toEdit = (type: string, title: string, value: string) => {
  router.push({
    path: '/user/edit',
    query: {
      id: user.id,
      type: type,
      title: title,
      value: value,
    },
  });
}

</script>

<style>

</style>