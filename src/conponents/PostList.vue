<template>
  <div>
    <h2>Users</h2>
    <Post v-for="post in posts" :key="post.id" :post="post"/>
  </div>


</template>

<script>
import Post from "@/conponents/Post.vue";

export default {
  components: {Post},
  props: {
    posts: {
      type: Array,
      required: true
    },

  }

}
</script>

<style lang="scss" scoped>
.post {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #1c1c1c;

}

.post:first-child {
  margin-top: 0;
}
</style>