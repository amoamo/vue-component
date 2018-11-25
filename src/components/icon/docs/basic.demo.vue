<template>
  <simulator>
    <hm-icon type="icon-cuowu" class="icon" @click="handleClick"></hm-icon>
    <hm-icon type="icon-zhengque" class="icon"></hm-icon>
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