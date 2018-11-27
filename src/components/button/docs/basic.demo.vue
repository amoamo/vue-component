<template>
    <simulator>
      <cy-button text="4124124"></cy-button>
      <div class="pa20">
        <cy-button class="demo-btn" text="submit" @click="handleCLick"></cy-button>
        <cy-button class="demo-btn" text="warning" type="danger" @click="handleCLick"></cy-button>
        <cy-button class="demo-btn" text="warning" type="warning" @click="handleCLick"></cy-button>
      </div>
    </simulator>
</template>
<script>
  export default {
    methods: {
      handleCLick: function(e){
        console.log(e)
      }
    },

  }
</script>
<style scoped>
  .demo-btn{
    margin-bottom: 20px;
  }
</style>
