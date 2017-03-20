<template>
  <div id="app">
    <div id="banner">
      <img src="static/logo.png">
    </div>
    <div id="main">
      <div id="timeline">
        <timeline></timeline>
      </div>
      <img src="static/bg.jpg">
    </div>
  </div>
</template>

<script>
import Timeline from './timeline.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Timeline
  }
}
</script>

<style>
#timeline {
  z-index: 1;
  margin: auto; 
  width: 30%;
  position: absolute;
  margin-left: 20%;
}
#main {
  display: block; 
  width: 100%;
  height: 100%;
  background: #fdbfcb;
  position: relative;
  left: 0;
}
#main img {
  display: block;
  width: 100%;
  height: 100%;
}
#banner {
  display: block; 
  background: #fdbfcb;
  width: 100%;
  top: 0;
  left: 0;
}
#banner img {
  width: 15%;
  height: 100%;
}
</style>
