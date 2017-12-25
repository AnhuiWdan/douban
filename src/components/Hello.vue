<template>
  <div class="hello">
      <router-link to="/index">Github Api 示例</router-link>
      <router-link to="/vuex-demo">Vuex示例</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcom to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1,h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  margin: auto;
  text-align: center;
}
</style>


