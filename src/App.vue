<template>
  <div id="app">
    <div class="main-cnt">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

ul,li{
  list-style: none;
}


.language-html{
  margin-top:20px;
  padding:20px;
  border-radius: 4px;
  display: block;
  background: #f5f5f5;
}

.router-link-active{
    color:#42b983!important;
}
</style>
