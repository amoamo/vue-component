<template>
  <button @click="handleClick" class="btn" :class="btnClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'hm-button',

  inject: {
    hmForm: {
      default: ""
    }
  },

  props: {
    text: {
      type: String,
      default: "submit"
    },
    type: {
      type: String,
      default: "primary"
    },
    htmlType: String
  },

  computed: {
    btnClass: function(){
      return `btn-${this.type}`
    }
  },

  methods: {
    handleClick: function(event){

      if(this.hmForm){
        if(this.htmlType === "submit"){
          this.hmForm.submit();
        }
      }

      this.$emit("click", {event})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
