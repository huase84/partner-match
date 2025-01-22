<template>
  <form action="/">
    <van-search
      v-model="tagValue"
      show-action
      placeholder="请输入搜索关键词"
      @search="filterTags"
    >
      <template #action>
        <div @click="filterTags">搜索</div>
      </template>
    </van-search>
  </form>
  <van-divider>已选标签</van-divider>
  <div>
    <van-tag
      v-for="tag in activeIds"
      :key="tag"
      :name="tag"
      :round="true"
      :size="'medium'"
      type="primary"
      :closeable="true"
      style="margin-left: 5px;margin-bottom: 10px;"
      @close="activeIds.splice(activeIds.indexOf(tag), 1)"
    >
      {{ tag }}
    </van-tag>
  </div>
  <van-divider>选择标签</van-divider>
  <van-tree-select
    v-model:active-id="activeIds"
    v-model:main-active-index="activeIndex"
    :items="tagList"
  />
  <div style="margin: 50px;">
    <van-button style="width: 100%;" type="primary">查询</van-button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

var tagValue = ref('')

const activeIds = ref([]);
const activeIndex = ref(0);
const originTagList = [
  {
    text: '浙江',
    children: [
      { text: '杭州', id: '杭州' },
      { text: '温州', id: '温州' },
    ],
  },
  {
    text: '江苏',
    children: [
      { text: '南京', id: '南京' },
      { text: '无锡', id: '无锡' },
    ],
  },
];
var tagList = ref(originTagList)

const filterTags = () => {
  if (tagValue.value == '' || tagValue.value == undefined) {
    tagList.value = [...originTagList]
    console.log('ttt',tagList, 'sdfsdfs',tagValue.value)
    return
  }

  // 方式一
  // tagList.value = originTagList.map(item => {
  //   var children = []
  //   item.children.forEach(child => {
  //     if (child.text.includes(tagValue.value)) {
  //       children.push(child)
  //     }
  //   })
  //   return {
  //     text: item.text,
  //     children: children
  //   }
  // })
  // console.log('filterTags', tagValue.value, tagList)

  // 方式二
  tagList.value = []
  originTagList.forEach(item => {
    const children = item.children.filter(c => c.text.includes(tagValue.value))
    if (children.length > 0) {
      tagList.value.push({
        text: item.text,
        children: children
      })
    }
  })
}
</script>