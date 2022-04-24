<template>
  <div class="home">
    <h1 id="test-home">Home Page</h1>
    <h2 id="txtName"></h2>
    <button @click="$router.push('post')" >Post</button>
    <div v-for="(post, index) in posts" :key="index">
      <h1>---------------</h1>
      <h2>{{ post.username }}</h2>
      <h3>{{ post.description }}</h3>
      <h3 @click="initMap(post.location)">{{ post.location }}</h3>
      <button @click="likePost(post.id)" post.type="button">Like</button>
    </div>
    <div id="map" style="display:none; witdth: 100%; height: 30vh; margin-left:30%; margin-right:30%; margin-top:20px; margin-bottom:20px"></div>    
  </div>

  
</template>
<script>
/* eslint-disable no-undef */
import { auth } from '../firebase'
import { db } from '../firebase'
import router from '../router'


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
            const Post = {
              id: doc.id,
              username: doc.data().username,
              description: doc.data().description,
              location: doc.data().location,
            }
            this.posts.push(Post)
            console.log(Post)
            //console.log(doc.data())
          })
        });
      },
      likePost(post_id) {
      const uid = auth.currentUser.uid
      const likedPost = {
        uid: uid,
        post_id: post_id
      }
      
      db.collection('liked').add(likedPost).then(() => {
        console.log('Post liked!')
      })
      router.push('/liked')
      },
      
      showLocation(loc) {
        window.open("https://maps.google.com/?q="+loc)
     },
    
          
      initMap(loc) {
        //router.push('/map')
         let map = null;
        const place = {
          lat: parseFloat(loc.substring(0, loc.indexOf(','))),
          lng: parseFloat(loc.substring(loc.indexOf(' ')+1))
          // Barrie's location
          // lat: 44.4001,
          // lng: -79.666
        };
        console.log(place)
        map = new google.maps.Map(document.getElementById("map"), {
          // I made it a global so I can use it in out events
          zoom: 15,
          center: place
        });
        new google.maps.Marker({
          position: place,
          map,
        });
        document.getElementById("map").style.display = "block";
        document.getElementById("map").scrollIntoView({behavior: 'smooth'});
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