# icon 图标

图标的使用

```html
<template>
  <div class="icon-wrapper">
    <hm-icon type="icon-fenxiang" class="icon" @click="handleClick"></hm-icon>
  </div>
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
  }
</style>
<!-- live-0-0.vue -->
```
