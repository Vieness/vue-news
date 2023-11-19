<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'MyButton'
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 15px;
  background: none;
  border: 1px solid #1c1c1c;
  border-radius: 25px;
  cursor: pointer;
}
</style>