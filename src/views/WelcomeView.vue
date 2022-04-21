<template>
  <div class="welcome">
    <h1 id="test-home">Welcome</h1><br>
    <button @click="$router.push('login')">Log In</button><br><br>
    <button @click="$router.push('register')">Create Account</button><br><br>

    <button @click="googleLogin">Google</button>
    <button @click="githubLogin">Github</button>
  </div>
</template>
<script>
import { GoogleAuthProvider,GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import router from '../router';

export default {
    methods: {
    googleLogin(){
      console.log('google login');
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(result => {
          console.log(result.user);
          router.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    },
    githubLogin(){
      console.log('github login');
      const provider = new GithubAuthProvider();
      signInWithPopup(auth, provider)
        .then(result => {
          console.log(result.user);
          router.push('/');
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

