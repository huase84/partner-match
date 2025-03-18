<template>
  <van-card
    v-for="user in userList"
    :desc="user.gender == '1' ? '男' : '女'"
    :title="user.username"
    thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag v-for="tag in user.tags" plain type="primary" style="margin: 5px;">{{ tag }}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini" @click="talkMe">联系我</van-button>
    </template>
  </van-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getUserListByTags } from '@/api/user'

const route = useRoute()
console.log(route.query, 'route.query')
const userList = ref<user>([{
  id: 1,
  username: '小米',
  userAccount: 'test',
  avatarUrl: 'test',
  gender: 1,
  phone: 'test',
  email: 'test',
  userStatus: 1,
  userRole: 1,
  planetCode: '1001',
  tags: ['java', 'vue', 'python'],
  createTime: new Date(),
},{
  id: 1,
  username: '小米',
  userAccount: 'test',
  avatarUrl: 'test',
  gender: 1,
  phone: 'test',
  email: 'test',
  userStatus: 1,
  userRole: 1,
  planetCode: '1001',
  tags: ['java', 'vue', 'python'],
  createTime: new Date(),
}])

const talkMe = () => {
  console.log('talkMe')
}

const userListByTags = async () => {
  const params = {
    tagNames: route.query.ids.join(',')
  }
  console.log(params, 'params')
  await getUserListByTags(params).then(res => {
    console.log(res.data, 'res.data')
    userList.value = res.data
  })
}

onMounted(() => {
  userListByTags()
})

</script>