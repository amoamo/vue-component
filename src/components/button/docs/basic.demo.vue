<template>
    <simulator>
      <div>
        <hm-button text="submit" @click="handleCLick"></hm-button>
        <hm-button text="warning" type="danger" @click="handleCLick"></hm-button>
        <hm-button text="warning" type="warning" @click="handleCLick"></hm-button>
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

</style>
