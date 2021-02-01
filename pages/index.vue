<template>
  <client-only>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="performance">
        <p>首字节： {{ this.performance.first || '计算中...' }}</p>
        <p>domReady: {{ this.performance.dom || '计算中...' }}</p>
        <p>onLoad: {{ this.performance.onLoad || '计算中...' }}</p>
      </div>
      <DynamicScroller
        :items="list"
        :min-item-size="120"
        :buffer="5000"
        :emit-update="true"
        page-mode
        class="scroller"
      >
        <template #before>
          <div class="dzq-header"></div>
          <tabs />
          <div class="padding10"></div>
          <stick-list />
        </template>
        <template v-slot="{ item, index, active }">
          <DynamicScrollerItem
            :item="item"
            :active="active"
            :size-dependencies="['item.content', 'item.images']"
            :data-index="index"
          >
            <list-item
              :key="index"
              :name="item.name"
              :avatar="item.avatar"
              :create-time="item.createTime"
              :images="item.images"
              :content="item.content"
              @click="handleClick(item)"
            />
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
    </van-list>
  </client-only>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      loading: false,
      finished: false,
      page: 1,
      performance: {
        first: null,
        dom: null,
        onLoad: null,
      },
    }
  },
  computed: {
    list() {
      return this.$store.state.topic.list
    },
  },
  mounted() {
    window.addEventListener('load', () => {
      // eslint-disable-next-line nuxt/no-globals-in-created
      const timing = window.performance.timing
      this.performance = {
        first: timing.responseStart - timing.domainLookupStart + '毫秒',
        dom: timing.domContentLoadedEventEnd - timing.fetchStart + '毫秒',
        onLoad: timing.loadEventStart - timing.fetchStart + '毫秒',
      }
    })
  },
  methods: {
    ...mapActions({
      getList: 'topic/getList',
    }),
    handleClick(data) {
      const { key = '' } = data
      this.$router.push(`/thread/${key}`)
    },
    getData() {
      this.loading = true
      const timer = setTimeout(() => {
        this.getList(this.page)
        this.page++
        this.loading = false
        clearTimeout(timer)
      }, 500)
    },
    onLoad() {
      this.getData()
    },
  },
}
</script>

<style lang="scss">
.dzq-header {
  width: 100%;
  height: 5.2rem;
  background-image: url(https://discuz-service-test-1258344699.cos.ap-guangzhou.myqcloud.com/background_image.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.dzq-list {
  overflow: hidden;
}

.performance {
  font-size: 14px;
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 99;
  border: 1px solid red;
  p {
    margin-bottom: 5px;
  }
}
</style>
