<template>
  <div id="app">
    <Header></Header>
    <div class="app-container">
      <transition name="fade"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import Header from './components/head.vue'

export default {
  name: 'app',
  components: {
      Header,
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
  height: 100%;
  max-height: 75%;
}
</style>
