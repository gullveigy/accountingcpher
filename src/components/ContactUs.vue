<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
      <div class="card">

        <img class="avatar" :src="picture">
        <div class="infos">
          <div class="name capitalize">
            {{ name }}
          </div>
          <div class="email">
            <i class="fa fa-envelope"></i>{{ email }}
          </div>
          <div class="phone">
            <i class="fa fa-phone"></i>{{ phone }}
          </div>
          <div class="nationality capitalize">
            <i class="fa fa-globe"></i>{{ nationality }}
          </div>
        </div>
      </div>

    <aplayer :audio="audio" :lrcType="3" fixed />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        audio: {
          name: '响喜乱舞（Cover：MARiA）',
          artist: '泠鸢yousa',
          url: 'https://cdn.moefe.org/music/mp3/kyoukiranbu.mp3',
        },
          messagetitle: ' Contact Me ',
          picture: 'https://wx4.sinaimg.cn/large/d40aef30ly1fybe2z08cej21kw11w7a8.jpg',
          name: ' Ying Yan',
          email: ' 20082241@mail.wit.ie',
          phone: ' 13046529705',
          nationality: ' China',
      };
    },
  };
</script>

<style>
  .hero {
    height: 100vh;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  aplayer {
    margin: auto;
    margin-top: 250px;
  }
  .card {
    width: 600px;
    min-height: 185px;
    background-color: rgba(255, 240, 245, 0.4);
    display: flex;
    margin: auto;
    margin-top: 80px;
    padding: 20px;
    border-radius: 20px;
  }
  .avatar {
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 70%;
  }
  .infos {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    color: black;
    font-size: 25pt;
  }
  .vue-title {
    margin-top: 60px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 5px;
  }

</style>

