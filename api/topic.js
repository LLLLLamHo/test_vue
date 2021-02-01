// import serviceAxios from './request'
import topicList from '~/mocks/topic'

const getList = () => {
  return topicList
}

const getDetail = (id) => {
  return topicList.filter((item) => item.id === id)
}

export default {
  getList,
  getDetail,
}
