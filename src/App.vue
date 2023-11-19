<template>
  <div class="app">
    <PostForm @create="createPost"/>
    <PostList
        :posts="posts"
    />


  </div>
</template>

<script>
import PostList from "@/conponents/PostList.vue";
import PostForm from "@/conponents/PostForm.vue";

export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [
        {id: 1, title: 'JS', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel?'},
        {id: 2, title: 'TS', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel?'},
        {id: 3, title: 'VUE', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel?'},
        {id: 4, title: 'React', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel?'},
        {id: 5, title: 'Angular', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, vel?'}
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.app {
  margin: 20px;
}

</style>