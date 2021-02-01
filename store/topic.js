import topic from '~/api/topic'
import topicContent from '~/mocks/topic-content'

// 过滤一下主题列表数据
const filterTopicList = (data = []) => {
  const result = []
  data.forEach((item, index) => {
    const tmp = {}
    tmp.createTime = item.createdAt || ''
    tmp.key = item.id
    // 虚拟列表需要id不一样，否则会白屏
    tmp.id = new Date().getTime() + index
    if (item && item.user) {
      tmp.name = item.user.username || ''
      tmp.avatar = item.user.avatarUrl || ''
    }
    if (item && item.firstPost) {
      tmp.content = item.firstPost.summaryText || ''
      tmp.images = item.firstPost.images || []
    }
    result.push(tmp)
  })
  return result
}

const state = () => ({
  list: [],
  detail: {},
})

const mutations = {
  SET_LIST(state, payload) {
    state.list = state.list.concat(payload)
  },
  SET_DETAIL(state, payload) {
    state.detail = payload
  },
}

const actions = {
  getList(context, page) {
    const result = topic.getList()
    context.commit('SET_LIST', filterTopicList(result))
  },
  getDetail(context, id) {
    const result = filterTopicList(topic.getDetail(id))[0] || {}
    result.content = topicContent.content
    context.commit('SET_DETAIL', result)
  },
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
