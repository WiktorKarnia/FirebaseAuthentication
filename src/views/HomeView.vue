<template>
  <div class="home">
    <h1 id="test-home">Home Page</h1>
    <h2 id="txtName"></h2>
    <button @click="$router.push('post')" >Post</button>
  </div>
</template>
<script>
import { auth } from '../firebase'
  export default {
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
    }
  }
</script>