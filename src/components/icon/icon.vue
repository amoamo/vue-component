<template>
  <i class="iconfont" 
    :class="type" 
    v-on="$listeners" 
    v-bind="$attrs"
  ></i>
</template>

<script>
import './assets/iconfont.css';
export default {
  name: 'cy-icon',

  props: {
    type: String
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
