<template>
  <div class="home">
    <h1 id="test-home">Home Page</h1>
    <h2 id="txtName"></h2>
    <button @click="$router.push('post')" >Post</button>
    <div v-for="(post, index) in posts" :key="index">
      <h1>---------------</h1>
      <h2>{{ post.username }}</h2>
      <h3>{{ post.description }}</h3>
      <h3>{{ post.location }}</h3>
    </div>
  </div>

  
</template>
<script>
import { auth } from '../firebase'
import { db } from '../firebase'
  export default {
    name: "HomeView",
    data:() => ({
      description: "",
      location: "",
      uid: "",
      username: "",
      posts: []
    }),
    methods: {
      fetchData(){
        db.collection("posts").get().then(docs => {
          docs.forEach(doc => {
            this.posts.push(doc.data());
            console.log(doc.data())
          })
        });
      }
    },
    mounted() {
      var user = auth.currentUser;
      var name, output,  username;
      output = document.getElementById("txtName");
      //console.log(user.email);
      if (user != null) {
        name = user.email;
        username = name.substring(0, name.indexOf('@'));
        output.innerHTML= "Welcome " + username;
      }
      this.fetchData()
    }
  }
</script>