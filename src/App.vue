<template>
  <div id="app">
    
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
html, body{
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper{
  width: 100%;
}
</style>
