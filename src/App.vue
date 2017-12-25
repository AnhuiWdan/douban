<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import vHeader from './components/header'
import Hello from './components/Hello'

export default {
  components: {
    vHeader,
    Hello
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus">
  @import "assets/style";
  @import "assets/list";
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
