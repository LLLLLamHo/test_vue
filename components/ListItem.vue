<template>
  <div class="dzq-item" @click="handleClick">
    <user-info :name="name" :avatar="avatar" :create-time="createTime" />
    <div class="dzq-item--content">
      <div class="dzq-content--text">
        {{ content }}
      </div>
      <template v-if="images.length > 0">
        <img
          v-for="(item, index) in images"
          :key="index"
          :class="images | imageClass"
          :src="item.thumbUrl"
        />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  filters: {
    imageClass(images) {
      if (images.length === 1) return 'dzq-content--image'
      if (images.length > 1) return 'dzq-content--image image-multi'
    },
  },
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
    images: {
      type: Array,
      default: () => {
        return []
      },
    },
    content: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss">
.dzq-item {
  margin: 0.4rem;
  padding: 0.2667rem;
  background-color: #fff;
  &--header {
    display: flex;
    height: 1.0667rem;
    justify-content: space-between;
    &_avatar {
      margin-right: 0.2667rem;
      width: 1.0667rem;
      height: 1.0667rem;
      object-fit: cover;
    }
    &_info {
      flex: 1;
    }
  }
}
.dzq-content {
  &--text {
    margin: 0.2667rem 0;
    font-size: 14px;
    word-break: break-all;
  }
  &--image {
    width: 8.5333rem;
    height: 6.4rem;
    &.image-second {
      width: 4.2667rem;
      height: 3.2rem;
    }
    &.image-multi {
      width: 2.8rem;
      height: 2.1333rem;
    }
  }
}
</style>
