<template>
  <div class="hero">

    <img alt="bts logo" src="../assets/final2.png" >

    <table align="center">
      <tr>
        <td>
          <p>
            <a href="#/login" class="btn btn-secondary btn" role="button">Already have an account?--Login</a>
            <a href="#/sign-up" class="btn btn-secondary btn" role="button">Create one now!--SignUp</a>
          </p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "HomePage"
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
  table {
    margin: auto;
    margin-top: 0px;
  }
</style>
