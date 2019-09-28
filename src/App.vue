<template>
  <div id="app">
    <Header :whichBtn.sync="whichBtn"></Header>
    <LoginRePannel :show.sync="whichBtn" v-if="whichBtn != 0"></LoginRePannel>
    <div class="app-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/head.vue'
import LoginRePannel from './components/views/login_register.vue'
export default {
  name: 'app',
  components: {
      Header,LoginRePannel
  },
  data: function() {
    return {
      whichBtn: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 85%;
  margin-bottom: 30px;
}

.app-container {
  margin: 100px 50px 20px 50px;
  border: none !important;
  background-color: white;
  height: auto;
  max-height: 75%;
}
</style>
