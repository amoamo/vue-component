<template>
  <button @click="handleClick" class="btn btn-primary">{{ text }}</button>
</template>

<script>
export default {
  name: 'HmButton',
  props: {
    text: String
  },
  methods: {
    handleClick: function(){
      this.$emit("click", {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
