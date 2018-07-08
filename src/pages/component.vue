<template>
  <div>
    <div class="header"> vue component </div>
    <side-nav :navsData="navsData"></side-nav>
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import navsData from "../nav.config.json";
  import '../assets/css/bootstrap.min.css';
  import '../assets/icon/iconfont.css';
  import 'highlight.js/styles/github-gist.css';

  export default {
    data(){
      return {
        navsData
      }
    }
  }
</script>
<style scoped>
  .main{
    padding:30px 0 0 220px;
  }

  .content{
    width:1000px;
    margin:30px auto;
    padding:0 30px;
    box-sizing: border-box;
  }

  .header{
    position: fixed;
    width:100%;
    height:60px;
    top:0;
    left:0;
    background: #fff;
    border-bottom:1px #eee solid;
    box-shadow: 0px 2px 5px #eee;
    box-sizing: border-box;

    font-size: 20px;
    line-height: 60px;
    padding-left:50px;
  }
</style>