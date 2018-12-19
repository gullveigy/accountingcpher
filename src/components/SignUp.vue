<template>
  <div class="hero">
   <div class="sign-up">
     <img alt="bts logo" src="../assets/final1.png" >
     <p>Let's create a new account !</p>
     <input type="text" v-model="email" placeholder="Email"><br>
     <input type="password" v-model="password" placeholder="Password"><br>
     <button @click="signUp">Sign Up</button>
     <span>or go back to <router-link to="/login">login</router-link>.</span>
   </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp: function() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('home')
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

<style scoped>
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: auto;
    margin-top: 30px;
    width: 25%;
    padding: 10px;
  }
  button {
    margin-top: 30px;
    width: 10%;
    padding: 5px;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 40px;
    font-size: 20px;
  }
  p {
    margin: auto;
    margin-top: 40px;
    font-size: 30pt;
  }
</style>
