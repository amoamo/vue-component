<template>
  <i class="iconfont" 
    :class="type" 
    v-on="$listeners" 
    v-bind="$attrs"
  ></i>
</template>

<script>
export default {
  name: 'hm-icon',

  props: {
    type: String
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
