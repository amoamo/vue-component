<template>
  <button @click="handleClick" class="btn" :class="btnClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'HmButton',

  props: {
    text: String,
    type: {
      type: String,
      default: "primary"
    }
  },

  computed: {
    btnClass: function(){
      return `btn-${this.type}`
    }
  },

  methods: {
    handleClick: function(event){
      this.$emit("click", {event})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
