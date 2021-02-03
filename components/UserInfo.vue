<template>
  <div class="dzq-user">
    <img class="dzq-user--avatar" :src="avatar" />
    <div class="dzq-user--info">
      <div class="dzq-user--name">
        {{ name }}
      </div>
      <div class="dzq-user--createtime">
        {{ createTime }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: {
    name: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    createTime: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.dzq-user {
  display: flex;
  height: 40px;
  justify-content: space-between;
  &--avatar {
    margin-right: 8px;
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
  &--info {
    flex: 1;
    font-size: 14px;
  }
}
</style>
