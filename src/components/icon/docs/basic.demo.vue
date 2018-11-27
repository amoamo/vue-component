<template>
  <simulator>
    <cy-icon type="icon-cuowu" class="icon" @click="handleClick"></cy-icon>
    <cy-icon type="icon-zhengque" class="icon"></cy-icon>
  </simulator>
</template>
<script>
  export default {
    data () {
      return {
        
      }
    },

    methods: {
      handleClick: function(){
        console.log(123)
      }
    }
  }
</script>
<style>
  .icon-wrapper .icon{
    color: #666;
    font-size: 30px;
    margin:10px;
  }
</style>