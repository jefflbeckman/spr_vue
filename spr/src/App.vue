<template>
  <div id="app" class="arrange-horizontally" margin:auto>
    <spr msg="R.I.P. Napster" stream_name="test"/>
    <logo /> 
  </div>
</template>

<script>
import spr from './components/spr.vue'
import logo from './components/logo.vue'

export default {
  name: 'App',
  components: {
    spr,
    logo,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
