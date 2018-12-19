<template>
  <div class="hero">
   <div class="login">
     <img alt="bts logo" src="../assets/final1.png" >
     <h3>Sign In</h3>
     <input type="text" v-model="email" placeholder="Email"><br>
     <input type="password" v-model="password" placeholder="Password"><br>
     <button @click="login">Connection</button>
     <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
   </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
.hero {
  height: 100vh;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.login {
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
p {
  margin-top: 40px;
  font-size: 20px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
  h3 {
    margin: auto;
    margin-top: 40px;
    font-size: 30pt;
  }
</style>
