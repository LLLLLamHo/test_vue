<template>
  <div class="dzq-stick">
    <stick-list-item
      v-for="(item, index) in sticks"
      :key="index"
      :content="item.content"
    ></stick-list-item>
  </div>
</template>

<script>
export default {
  name: 'StickList',
  data() {
    return {
      sticks: [
        {
          content: 'hello world',
        },
        {
          content: '你好',
        },
        {
          content: '你好呀，世界！！！！！！！！！！！！',
        },
        {
          content: '啊啊啊啊啊啊啊啊啊😫啊',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.dzq-stick {
  background-color: #fff;
}
</style>
