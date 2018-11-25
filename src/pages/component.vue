<template>
  <div class="page-container">
    <page-header/>
    <div class="main">
      <side-nav :navsData="navsData"></side-nav>
      <router-view :path="$route.path"></router-view>
    </div>
  </div>
</template>
<script>
  import navsData from "../nav.config.json";
  import '../assets/icon/iconfont.css';
  import '../assets/css/bootstrap.min.css';
  import '../assets/css/common.css';
  import 'highlight.js/styles/androidstudio.css';

  export default {
    data(){
      return {
        navsData
      }
    }
  }
</script>
<style scoped>
  .page-container{
    position: absolute;
    width:100%;
    top:0;
    bottom: 0;
  }

  .main{
    padding:60px 0 0 0;
    display: flex;
    box-sizing: border-box;
    height:100%;
  }
</style>