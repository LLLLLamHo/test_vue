<template>
  <div class="dzq-stick--item" @click="handleClick">
    <div class="dzq-stick--item_left">置顶</div>
    <div class="dzq-stick--item_right">
      {{ content }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StickListItem',
  props: {
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
.dzq-stick--item {
  display: flex;
  padding: 6px 0;
  margin: 0 8px;
  align-content: center;
  border-bottom: 1px solid #eee;
  &_left {
    display: inline-block;
    margin-right: 4px;
    width: 31px;
    height: 17px;
    justify-content: center;
    align-content: center;
    text-align: center;
    font-size: 11px;
    background-color: rgba(234, 61, 90, 0.08);
    color: #ea3d5a;
    border-radius: 2px;
  }
  &_right {
    font-size: 14px;
    flex: 1;
  }
}
</style>
