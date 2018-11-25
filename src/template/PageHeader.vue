<template>
  <div>
    <div class="header">Cyan UI</div>
  </div>
</template>
<script>
  export default {
    name: "page-header",
  }
</script>
<style scoped>
  .header{
    position: fixed;
    width:100%;
    height:60px;
    top:0;
    left:0;
    background: #34495e;
    border-bottom:1px #eee solid;
    box-shadow: 0px 2px 5px #eee;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 60px;
    padding-left:50px;
    color:#fff;
  }
</style>