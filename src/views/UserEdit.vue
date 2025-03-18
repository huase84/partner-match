<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="value"
        :name="route.query.title"
        :label="route.query.title"
        :placeholder="`请填写${route.query.title}`"
        :rules="[{ required: true, message: `请填写${route.query.title}` }]"
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
import { useRoute, useRouter } from 'vue-router';
import { showToast } from 'vant'
import { updateUser } from '@/api/user';

const route = useRoute();
const router = useRouter();
console.log(route.query);
const value = ref();
value.value = route.query == null ? null : route.query.value

const onSubmit = (values) => {
  if(value.value == route.query.value) {
    showToast({
      message: '请填写新的' + route.query.title,
      position: 'bottom',
    });
    return
  }
  var params = { 
    id: route.query.id,
    [route.query.type]: value.value
  };
  // 更新用户信息
  updateUser(params).then(res => {
    showToast({
      message: '修改成功',
      position: 'bottom',
    });
    router.back()
  })
};
</script>