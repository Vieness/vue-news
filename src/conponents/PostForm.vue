<template>
  <form class="form" @submit.prevent>
    <h4> Create post</h4>
    <div class="input-container">
      <input v-model="post.title" class="input" type="text" placeholder="Title">
      <input v-model="post.body" class="input" type="text"
             placeholder="Description">
    </div>
    <br>
    <MyButton class="btn" type="submit" @click="onSubmit">Submit post</MyButton>
  </form>
</template>

<script>

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.form {
  display: flex;
  flex-direction: column;
}



.input-container {
  display: flex;
}

.input {
  width: 100%;
  border: 1px solid #444444;
  padding: 10px 15px;
  border-radius: 25px;

}
.btn{
  align-self: flex-end;
  transition: 0.5s;
  &:hover{
    background-color: #00c500;

  }
}

.input:first-child {
  margin-right: 10px;
}
</style>