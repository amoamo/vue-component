<template>
  <button @click="handleClick" class="cy-btn" :class="btnClass">
  <slot></slot>
  {{ text }}
  </button>
</template>
<script>
export default {
  name: 'cy-button',

  inject: {
    hmForm: {
      default: ""
    }
  },

  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "large"
    },
    htmlType: String
  },

  computed: {
    btnClass: function(){
      return `cy-btn-${this.type} cy-btn-${this.size}`
    }
  },

  methods: {
    handleClick: function(event){

      if(this.hmForm){
        if(this.htmlType === "submit"){
          this.hmForm.submit();
        }
      }

      if(this.hmForm){
        if(this.htmlType === "reset"){
          this.hmForm.resetFields();
        }
      }

      this.$emit("click", {event})
    }
  }
}
</script>
<style>
  .cy-btn{
    border:none;
    background: #34495e;
    color: white;
    font-size: 16.5px;
    text-decoration: none;
    text-shadow: none;
    vertical-align: middle;
    transition: 0.25s;
    
  }

  .cy-btn-large{
    width:100%;
    display: block;
    border-radius: 6px;
    padding-bottom: 12px;
    padding-top: 13px;
  }

  .cy-btn:hover, .cy-btn:focus {
    background-color: #4e6d8d;
    color: white;
    transition: 0.25s;
    -webkit-backface-visibility: hidden; 
    outline: none;
  }

  .cy-btn:active, .cy-btn.active {
    background-color: #2c3e50;
    color: rgba(255, 255, 255, 0.75);
    box-shadow: none; 
  }

  .cy-btn.disabled, .cy-btn[disabled] {
    background-color: #95a5a6;
    color: white; 
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
