<template>
  <div class="dzq-scroll-box">
    <div class="dzq-tab">
      <div class="dzq-tab--item active">默认</div>
      <div class="dzq-tab--item">所有</div>
      <div class="dzq-tab--item">默认分类</div>
      <div class="dzq-tab--item">地球</div>
      <div class="dzq-tab--item">火星</div>
      <div class="dzq-tab--item">太阳</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
}
</script>

<style lang="scss">
.dzq-scroll-box {
  overflow-y: scroll;
}
.dzq-tab {
  display: flex;
  background-color: #fff;
  &--item {
    margin: 0 8px;
    height: 50px;
    line-height: 50px;
    font-size: 13px;
    flex: 1 1 auto;
    &.active {
      position: relative;
      font-weight: 700;
      color: #ea3d5a;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #ea3d5a;
      }
    }
  }
}
</style>
