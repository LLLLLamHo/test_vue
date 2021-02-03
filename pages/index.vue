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
        <p>render: {{ this.performance.render || '计算中...' }}</p>
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
          <div class="dzq-header">
            <img src="admin-logo-x2.png" />
          </div>
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
      wait: 0,
      performance: {
        first: null,
        dom: null,
        render: null,
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
    const search = window.location.search.replace('?', '')
    if (search !== '') {
      const searchArr = search.split('&')
      for (let i = 0; i < searchArr.length; i++) {
        const [key, value] = searchArr[i].split('=')
        if (key === 'wait') {
          this.wait = value
        }
      }
    }
    const timing = window.performance.timing
    setTimeout(() => {
      this.performance = {
        first: timing.responseStart - timing.domainLookupStart + '毫秒',
        dom: timing.domContentLoadedEventEnd - timing.fetchStart + '毫秒',
        render: Date.now() - timing.responseStart + '毫秒',
        onLoad: this.performance.onLoad,
      }
    }, 300)
    window.addEventListener('load', () => {
      // eslint-disable-next-line nuxt/no-globals-in-created
      this.performance = Object.assign(this.performance, {
        onLoad: timing.loadEventStart - timing.fetchStart + '毫秒',
      })
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
      }, this.wait)
    },
    onLoad() {
      this.getData()
    },
  },
}
</script>

<style lang="scss">
.dzq-header {
  background: rgb(24, 120, 243);
  width: 100%;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  img {
    display: block;
    width: 247px;
    height: 66px;
    margin: 0 auto;
    padding-top: 30px;
  }
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
