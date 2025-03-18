<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="userAccount"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { userStore } from '@/store/user.ts'
import route from '@/router/index.js';

const store = userStore();

const userAccount = ref('huashi');
const password = ref('12345678');
const onSubmit = (values) => {
  store.userLogin({
    userAccount: userAccount.value,
    userPassword: password.value
  }).then(res => {
    if(res.code == 200) {
      store.setUser(res.data)
      route.push('/')
    }
    console.log(res, 'login')
  })
  console.log('submit', values);
};
</script>