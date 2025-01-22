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
import { useRoute } from 'vue-router';
import { showToast } from 'vant'

const route = useRoute();
console.log(route.query);
const value = ref();
value.value = route.query == null ? null : route.query.value

const onSubmit = (values) => {
  if(value.value == route.query.value) {
    showToast.fail('请填写新的' + route.query.title)
    return
  }
  var params = { 
    id: route.query.id,
    [route.query.type]: value.value
  };
  console.log(params, values);
};
</script>