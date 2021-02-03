<template>
  <div class="dzq-detail">
    <div class="go-back" @click="handleClick">返回</div>
    <div class="padding10"></div>
    <user-info
      :name="detail.name"
      :create-item="detail.createTime"
      :avatar="detail.avatar"
    ></user-info>
    <div class="dzq-content--text">
      <!-- 不能直接这样的，会有xss风险。这里只是一个展示demo，暂时这么处理 -->
      <div v-html="detail.content"></div>
    </div>
    <template v-if="detail.images && detail.images.length > 0">
      <img
        v-for="(item, index) in detail.images"
        :key="index"
        :src="item.thumbUrl"
        class="dzq-content--image"
      />
    </template>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ThreadDetailPage',
  data() {
    return {}
  },
  computed: {
    detail() {
      return this.$store.state.topic.detail
    },
  },
  created() {
    const { id } = this.$route.params
    this.getDetail(id)
  },
  methods: {
    ...mapActions({
      getDetail: 'topic/getDetail',
    }),
    handleClick() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss">
.dzq-detail {
  padding: 8px;
  background-color: #fff;
}
.dzq-content {
  &--text {
    margin: 4px 0;
    font-size: 14px;
    word-break: break-all;
    p {
      margin-bottom: 4px;
      font-size: 14px;
    }
    img {
      width: 100%;
    }
  }
  &--image {
    width: 33%;
    height: 105px;
  }
}
.go-back {
  height: 1.0667rem;
  line-height: 1.0667rem;
  text-align: center;
  font-size: 14px;
  border-bottom: 1px solid;
}
</style>
