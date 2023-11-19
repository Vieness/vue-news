<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong> {{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <MyButton class="bnt">Delete</MyButton>
    </div>
  </div>
</template>

<script>

export default {

  props: {
    post: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
.post {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.btn {
  border: 1px solid red;
  transition: 0.5s;
  &:hover{
    background-color: red;
    border: 1px solid #000;
  }
}
</style>