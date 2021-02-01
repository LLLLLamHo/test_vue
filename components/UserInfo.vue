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
  height: 1.0667rem;
  justify-content: space-between;
  &--avatar {
    margin-right: 0.2667rem;
    width: 1.0667rem;
    height: 1.0667rem;
    object-fit: cover;
  }
  &--info {
    flex: 1;
    font-size: 14px;
  }
}
</style>
